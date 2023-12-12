/*Milestone 1
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.

    https://flynn.boolean.careers/exercises/api/random/mail
*/



const { createApp } = Vue;

createApp({
  data() {
    return {
      array: [], // Inizializzazione di un array vuoto per contenere gli indirizzi email.
    };
  },

  methods: {
    getNewEmail() {
      // Iterazione per ottenere 10 nuovi indirizzi email.
      for (let index = 0; index < 10; index++) {
        // Effettua una richiesta GET all'API per ottenere un indirizzo email casuale.
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(
          (response) => {
            // Quando la richiesta axios ha successo, aggiungi l'indirizzo email all'array.
            this.array.push(response.data.response);
          }
        );
      }
    },
  },

  created() {
    // Chiamato quando l'istanza dell'app è stata creata.
    // Chiama il metodo per ottenere nuovi indirizzi email.
    this.getNewEmail();
  },
}).mount('#app');
