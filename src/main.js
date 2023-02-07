const axios = require("axios");

class DicioJS {
  /**
   * Retorna informação da palavra especificada
   * @param {string} word - A palavra a ser pesquisada
   * @example - Exemplo de retorno
   * [{ partOfSpeech: 'classe pertencente á palavra', meanings: ["significado1", "significado2"] , etymology: "etimologia da palavra"}]
   */
  async palavra(word) {
    return await axios
      .get(`https://dicio.danitto.tk/v2/${encodeURI(word)}`)
      .then((response) => {
        return response.data;
      });
  }

  /**
   * Retorna uma array com os sinónimos da palavra especificada
   * @param {string} word - A palavra a ser pesquisada
   * @example - Exemplo de retorno
   * ["sinonimo1", "sinonimo2"]
   */
  async sinonimos(word) {
    return await axios
      .get(`https://dicio.danitto.tk/v2/sinonimos/${encodeURI(word)}`)
      .then((response) => {
        return response.data;
      });
  }

  /**
   * Retorna exemplos de frases com a palavra especificada
   * @param {string} word - A palavra a ser pesquisada
   * @example - Exemplo de retorno
   * [{sentence:"frase1", author:"autor da frase"}, {sentence:"frase2", author:"autor da frase""}]
   */
  async frases(word) {
    return await axios
      .get(`https://dicio.danitto.tk/v2/frases/${encodeURI(word)}`)
      .then((response) => {
        return response.data;
      });
  }

  /**
   * Retorna a separação silábica da palavra especificada
   * @param {string} word - A palavra a ser pesquisada
   * @example - Exemplo de retorno com a palavra "suspeito"
   * ["sus","pei","to"]
   */
  async separacaoSilabica(word) {
    return await axios
      .get(`https://dicio.danitto.tk/v2/silabas/${encodeURI(word)}`)
      .then((response) => {
        return response.data;
      });
  }
}
module.exports = new DicioJS();
