<?php
// Kontaktní formulář philippsro.cz – bez databáze.
declare(strict_types=1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /#kontakt', true, 303);
    exit;
}

// Zabrání zpracování nečekaně velkých požadavků.
if (isset($_SERVER['CONTENT_LENGTH']) && (int) $_SERVER['CONTENT_LENGTH'] > 20000) {
    header('Location: /?chyba=1#kontakt', true, 303);
    exit;
}

function post_value(string $key): string {
    $value = $_POST[$key] ?? '';
    if (is_array($value)) return '';
    return trim((string) $value);
}

function text_len(string $value): int {
    return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value);
}

function has_header_injection(string $value): bool {
    return (bool) preg_match('/[\r\n]/', $value);
}

// Honeypot: běžný návštěvník pole nevidí a nechá ho prázdné.
if (post_value('website') !== '') {
    header('Location: /?odeslano=1#kontakt', true, 303);
    exit;
}

$name    = post_value('name');
$email   = post_value('email');
$company = post_value('company');
$phone   = post_value('phone');
$message = post_value('message');

$invalid = false;
$invalid = $invalid || $name === '' || text_len($name) > 120;
$invalid = $invalid || !filter_var($email, FILTER_VALIDATE_EMAIL) || text_len($email) > 254;
$invalid = $invalid || text_len($company) > 150;
$invalid = $invalid || text_len($phone) > 50;
$invalid = $invalid || text_len($message) < 5 || text_len($message) > 5000;
$invalid = $invalid || has_header_injection($name) || has_header_injection($email) || has_header_injection($company) || has_header_injection($phone);

if ($invalid) {
    header('Location: /?chyba=1#kontakt', true, 303);
    exit;
}

// Odstraníme řídicí znaky, ale zachováme běžné české znaky a odřádkování zprávy.
$name    = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $name) ?? $name;
$company = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $company) ?? $company;
$phone   = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $phone) ?? $phone;
$message = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $message) ?? $message;

$to = 'david.philipp@philippsro.cz';
$subjectText = 'Nová zpráva z webu philippsro.cz';
$subject = '=?UTF-8?B?' . base64_encode($subjectText) . '?=';

$body  = "Nová zpráva z kontaktního formuláře\n\n";
$body .= "Jméno: " . $name . "\n";
$body .= "E-mail: " . $email . "\n";
$body .= "Firma: " . ($company !== '' ? $company : 'neuvedeno') . "\n";
$body .= "Telefon: " . ($phone !== '' ? $phone : 'neuvedeno') . "\n\n";
$body .= "Zpráva:\n" . $message . "\n";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'Content-Transfer-Encoding: 8bit';
$headers[] = 'From: Web philippsro.cz <david.philipp@philippsro.cz>';
$headers[] = 'Reply-To: ' . $email;
$headers[] = 'X-Mailer: PHP/' . PHP_VERSION;

$sent = @mail($to, $subject, $body, implode("\r\n", $headers));

if ($sent) {
    header('Location: /?odeslano=1#kontakt', true, 303);
} else {
    header('Location: /?chyba=1#kontakt', true, 303);
}
exit;
