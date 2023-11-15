import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';


describe('Initial Rendering Tests', () => { //Creo un blocco di testing
  beforeEach(() => { //Funzione di Jest eseguita dentro "describe" per renderizzare l'applicazione
    render(<App />);  
  });

  //Test che verifica il rendering del componente di Benvenuto
  test('renders the Welcome Component', ()=> {  
    const mainHeader = screen.getByRole('heading', { name: /Welcome to EPIBOOKS, explore our fascinating world of online books, where inexhaustible worlds unfold between the pages. Discover engaging stories and enlightening essays, be captivated by literary adventures. We are here to fuel your passion for reading in a universe of knowledge and inspiration.../i });
    expect(mainHeader).toBeInTheDocument();
  });

  //Test che verifica il rendering di tutti i 150 libri
  test('renders all 150 books', () => { 
    const allTheBookCards = screen.getByTestId('book*card');
    expect(allTheBookCards).toHaveLength(150);
  });

  //Test che verifica il rendering del componente CommentArea
  test('renders CommentArea Component', () => { //Test CommentArea
    const reviewInputField = screen.getByPlaceholderText(/Enter the text here.../i);
    expect(reviewInputField).toBeInTheDocument();
  });
});



describe('Filter testing', () => {
  beforeEach(() => {
    render(<App />);
  });

  //Test per trovare un risultato della parola "arrow"
  test("finds just one result for the world 'arrow'", () => { 
    const filterInputField = screen.getByPlaceholderText(/A Game of Thrones.../i);
    fireEvent.change(filterInputField, { target: { value: 'arrows' } });
    const filteredBookCards = screen.getAllByTestId ('book-card');
    expect(filteredBookCards).toHaveLength(1);
  });

  //Test per trovare 3 (tre) volte la parola "witcher"
  test("finds three result for the world 'witcher'", () => { 
    const filterInputField = screen.getByPlaceholderText(/A Game of Thrones.../i);
    fireEvent.change(filterInputField, { target: { value: 'witcher' } });
    const filteredBookCards = screen.getAllByTestId('book-Card');
    expect(filteredBookCards).toHaveLength(3);
  });
});



describe('SingleBook testing', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('changes book card border on mouse hover and reverts on mouse leave', () => {
    const allTheBookCards = screen.getAllByTestId('book-card');
    const firstBookCard = allTheBookCards[0];
    
    //Simula l'evento di passaggio del mouse sopra la card
    fireEvent.mouseEnter(firstBookCard); 
    expect(firstBookCard).toHaveStyle('border: 3px solid red');
 
    //Simula l'evento quando il mouse si sposta fuori dalla card
    fireEvent.mouseLeave(firstBookCard); 
    expect(firstBookCard).not.toHaveStyle('border: 3px solid red');
  });
});


describe('Update CommentList testing', () => {
  beforeEach(() => {
    render(<App />);
  });
  
  //Test per verificare che non ci sia stato nessun commento durante il caricamento
  test('does not render book comments initially', () => {
    const initialBookComments = screen.queryAllByTestId ('single-comment');
    expect(initialBookComments).toHaveLength(0);
  });

  //Test per verificare quando si fa click si visualizzano i commenti su un libro valido 
  test('renders comments after clicking a valid book', async () => {
    const allTheBookCards = screen.getAllByTestId('book-card');
    const firstBookCard = allTheBookCards[0];
    fireEvent.click(firstBookCard);
    const updatedBookComments = await screen.findAllByTestId ('single-comment');
    expect(updatedBookComments).not.toHaveLength(0);
  });
});
