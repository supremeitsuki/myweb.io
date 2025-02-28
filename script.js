document.getElementById('loginBtn').addEventListener('click', function() {
    // Redirect to your backend OAuth2 login URL
    window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=identify';
});
