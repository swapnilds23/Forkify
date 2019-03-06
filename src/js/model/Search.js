import axios from 'axios';

export default class Search {
    constructor(query){
      this.query=query;
    }

    async getResults() {
      const key ='25647cb7b37e29a7142451e26dea08ff';
      try{
        const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
        this.recipes = res.data.recipes;
      }
      catch(error){
        alert(error);
      }

    }
}
