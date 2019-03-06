// Global app controller
import Search from './model/Search';
import * as searchView from './view/searchView'
import { elements } from './view/base';
// Global state for app
const state ={} ;

const controlSearch = async () => {
  //Get query from view
  const query = searchView.getInput();
  
  if (query) {
    //new search object and add to state
    state.search = new Search(query);

    // prepare UI for results

    //Search for Recipes
    await state.search.getResults();

    // Render results to UI
    searchView.renderResults(state.search.recipes);
  }
}

elements.searchForm.addEventListener('submit', (e) =>{
  e.preventDefault();
  controlSearch();
});
