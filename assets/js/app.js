new Vue({
  el: '#app',
  data: {
    cardTitle: 'Visa Classic Crédito',
    chipSrc: '',
    cardNumber: '400 500 600 700',
    expiryDate: '01/30',
    owner: 'William Henry Gates III',
    cardTypeSrc: '',
    validTitle: true,
    validNumber: true,
    validExpiryDate: true,
    validOwner: true,
  },
  methods: {
    validateForm() {
      this.validateTitle();
      this.validateNumber();
      this.validateExpiryDate();
      this.validateOwner();
      if (this.validTitle && this.validNumber && this.validExpiryDate && this.validOwner) {
        alert("Formulario válido");
      } else {
        alert("Por favor, corrige los errores en el formulario");
      }
    },
    validateTitle() {
      this.validTitle = this.cardTitle.trim() !== '';
    },
    validateNumber() {
      const regex = /^[0-9\s]+$/;
      this.validNumber = regex.test(this.cardNumber.trim());
    },
    validateExpiryDate() {
      const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
      this.validExpiryDate = regex.test(this.expiryDate.trim());
    },
    validateOwner() {
      this.validOwner = this.owner.trim() !== '';
    }
  }
});
