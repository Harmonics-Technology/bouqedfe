# Bouqed Email Template

A reusable, email client-compliant HTML template that matches the Bouqed landing page design system.

## Overview

This email template is designed to maintain brand consistency with your Bouqed landing page while ensuring compatibility across all major email clients. It features the same color scheme, typography, and visual elements as your website.

## Files

- `email-template.html` - The main reusable template with placeholder variables
- `sample-email.html` - A complete example showing how to use the template
- `EMAIL_TEMPLATE_README.md` - This documentation file

## Design Features

### Brand Consistency
- **Logo**: Gradient "Bouqed" branding matching your landing page
- **Colors**: Blue to purple gradient (#3B82F6 to #8B5CF6)
- **Typography**: System fonts matching your website
- **Layout**: Clean, modern design with proper spacing

### Email Client Compatibility
- **Outlook Support**: MSO conditional comments and table-based layout
- **Mobile Responsive**: Optimized for mobile devices
- **Dark Mode**: Basic dark mode support where available
- **Cross-Client**: Tested for Gmail, Outlook, Apple Mail, and others

## Template Variables

Replace these placeholders in `email-template.html` with your actual content:

### Required Variables
- `{{subject}}` - Email subject line
- `{{email_title}}` - Main heading of the email
- `{{email_content}}` - Primary email content/message
- `{{cta_url}}` - Call-to-action button URL
- `{{cta_text}}` - Call-to-action button text

### Optional Variables
- `{{alert_message}}` - Info/tip message in the alert box
- `{{section_title}}` - Secondary section heading
- `{{section_content}}` - Secondary section content

### Footer Variables
- `{{website_url}}` - Link to your website
- `{{help_url}}` - Link to help/support page
- `{{contact_url}}` - Link to contact page
- `{{privacy_url}}` - Link to privacy policy
- `{{facebook_url}}` - Facebook social link
- `{{twitter_url}}` - Twitter social link
- `{{instagram_url}}` - Instagram social link
- `{{linkedin_url}}` - LinkedIn social link
- `{{company_address}}` - Physical company address
- `{{unsubscribe_url}}` - Unsubscribe link
- `{{preferences_url}}` - Email preferences link

## Usage Examples

### Basic Welcome Email
```html
<!-- Replace variables in email-template.html -->
{{subject}} → "Welcome to Bouqed!"
{{email_title}} → "Welcome to Bouqed! 🎉"
{{email_content}} → "We're excited to have you join our community..."
{{cta_url}} → "https://bouqed.com/explore"
{{cta_text}} → "Start Exploring Services"
```

### Booking Confirmation
```html
{{subject}} → "Booking Confirmed - Your Service is Scheduled"
{{email_title}} → "Booking Confirmed ✅"
{{email_content}} → "Your booking with [Provider Name] has been confirmed..."
{{cta_url}} → "https://bouqed.com/bookings/123"
{{cta_text}} → "View Booking Details"
```

### Password Reset
```html
{{subject}} → "Reset Your Bouqed Password"
{{email_title}} → "Password Reset Request"
{{email_content}} → "We received a request to reset your password..."
{{cta_url}} → "https://bouqed.com/reset-password?token=abc123"
{{cta_text}} → "Reset Password"
```

## Customization Options

### Removing Optional Sections

If you don't need certain sections, you can remove them:

1. **Stats Section**: Remove the entire `stats-grid` div
2. **Alert Box**: Remove the `alert` div
3. **Secondary Content**: Remove the additional `content-section`

### Adding New Sections

To add new content sections, use this structure:
```html
<div class="content-section">
    <h2 class="email-subtitle">Your Section Title</h2>
    <p class="email-text">Your content here...</p>
</div>
```

### Button Variations

- **Primary Button**: `class="btn-primary"` (gradient background)
- **Secondary Button**: `class="btn-secondary"` (outlined style)

### Alert Types

- **Info**: `class="alert alert-info"` (blue theme)
- **Success**: `class="alert alert-success"` (green theme)
- **Warning**: `class="alert alert-warning"` (yellow theme)

## Technical Specifications

### Email Client Support
- ✅ Gmail (Web, Mobile, App)
- ✅ Outlook (2016+, Web, Mobile)
- ✅ Apple Mail (macOS, iOS)
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Mobile clients (iOS Mail, Android Gmail)

### Responsive Breakpoints
- **Desktop**: 600px+ (full layout)
- **Mobile**: <600px (stacked layout, full-width buttons)

### Performance
- **File Size**: ~15KB (optimized for fast loading)
- **Images**: Uses emoji icons (no external image dependencies)
- **Fonts**: System fonts (no web font loading)

## Best Practices

### Content Guidelines
1. **Subject Lines**: Keep under 50 characters
2. **Headlines**: Use action-oriented, clear language
3. **Body Text**: Keep paragraphs short (2-3 sentences)
4. **CTAs**: Use specific, actionable text

### Technical Guidelines
1. **Testing**: Always test in multiple email clients
2. **Links**: Use absolute URLs (https://)
3. **Images**: Include alt text for accessibility
4. **Preheader**: Add preheader text for better inbox preview

### Accessibility
- High contrast colors for readability
- Semantic HTML structure
- Alt text for images
- Keyboard navigation support

## Integration Examples

### With Email Service Providers

#### Mailchimp
```html
<!-- Replace variables with Mailchimp merge tags -->
{{email_title}} → *|FNAME|*, Welcome to Bouqed!
{{cta_url}} → *|WEBSITE_URL|*/explore
```

#### SendGrid
```html
<!-- Replace variables with SendGrid substitutions -->
{{email_title}} → {{first_name}}, Welcome to Bouqed!
{{cta_url}} → {{website_url}}/explore
```

#### Custom Implementation
```javascript
// Node.js example
const template = fs.readFileSync('email-template.html', 'utf8');
const emailHtml = template
  .replace('{{subject}}', 'Welcome to Bouqed!')
  .replace('{{email_title}}', 'Welcome to Bouqed! 🎉')
  .replace('{{email_content}}', 'We\'re excited to have you...')
  .replace('{{cta_url}}', 'https://bouqed.com/explore')
  .replace('{{cta_text}}', 'Start Exploring Services');
```

## Troubleshooting

### Common Issues

1. **Gradient not showing in Outlook**
   - This is expected; Outlook will show solid colors as fallback

2. **Mobile layout issues**
   - Ensure viewport meta tag is present
   - Test on actual devices, not just browser dev tools

3. **Dark mode not working**
   - Dark mode support is limited in email clients
   - The template provides basic support where available

### Testing Tools
- [Litmus](https://litmus.com) - Comprehensive email testing
- [Email on Acid](https://www.emailonacid.com) - Cross-client testing
- [Mail Tester](https://www.mail-tester.com) - Spam score checking

## Support

For questions or issues with the email template:
1. Check this documentation first
2. Test in multiple email clients
3. Validate HTML structure
4. Check for missing variable replacements

## Version History

- **v1.0** - Initial template matching Bouqed landing page design
  - Responsive design
  - Email client compatibility
  - Brand consistency
  - Modular sections
