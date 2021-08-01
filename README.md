# MyReads Project

-The application was created with [create-react-app] and requires only [npm install] and npm start to get it installed and launched.
-The home page shows 3 shelves for books. Each book is shown on the correct shelf, along with its title and all of its authors.
    --i created 4 component Books , Shelfs, HomePage, SearchPage.
    --in home page when a componentDidMount i load all the books from api.
    -- updateBooks this is a property i created to update books in a shelf by using api.

-The home page shows a control that allows users to move books between shelves. The control should be tied to each book instance.
- The functionality of moving a book to a different shelf works by using updateBooks proparety in book component. 
-When the browser is refreshed, the same information is displayed on the page.
-The search page has a search input field.

 --in search page there is a submit() in this function if query doesnot excist or was undefind the sreach page not show any thing and by using api if the book does not excist nothing will happen and if the book is exsist there will be a responce.
-Search results on the search page allow the user to select “currently reading”, “want to read”, or “read” to place the book in a certain shelf.

-If a book is assigned to a shelf on the home page and that book appears on the search page, the correct shelf should be selected on the search page that happen by:
{response.forEach(i => {
      let find = this.state.books.filter(bo =>bo.id === i.id);
      if(find[0]){
        i.shelf = find[0]; } });
-If that book's shelf is changed on the search page, that change should be reflected on thehome page as well. 
-The option "None" should be selected if a book has not been assigned to a shelf :
   (value={this.props.book.shelf || "none"}).
- to start  progject use [npm start].