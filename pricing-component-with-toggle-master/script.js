function showPricingChoice() {
    var pricingSwitch = document.getElementById('pricing-switch');
    
    // Toggle monthly and annual prices based on checkbox
    if (pricingSwitch.checked) {
        // Show annual prices and make them larger
        document.querySelectorAll('.monthly').forEach(function(el) {
            el.style.display = 'none';
        });
        document.querySelectorAll('.annual').forEach(function(el) {
            el.style.display = 'block';
            el.classList.add('price-large');
        });
    } else {
        // Show monthly prices and make them larger
        document.querySelectorAll('.annual').forEach(function(el) {
            el.style.display = 'none';
            el.classList.remove('price-large');
        });
        document.querySelectorAll('.monthly').forEach(function(el) {
            el.style.display = 'block';
            el.classList.add('price-large');
        });
    }
}

// Initialize on load (in case the default switch is 'Monthly')
window.onload = function() {
    showPricingChoice();
};
