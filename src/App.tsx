import * as C from './App.styles';

const App = () => {
  return (
    <C.Container>
      <C.Area>
        <C.Menu>
          <div className="logo">
            <img
              src="/assets/logo/logo01.png"
              alt="logo"
            />
          </div>
          <div className="menuItem">
            <ul>
              <li><span className='active'>Home</span></li>
              <li><span>Products</span></li>
              <li><span>Services</span></li>
              <li><span>Pricing</span></li>
            </ul>
          </div>
          <div className="menuOptions">
            <div className="menuOptionsItem">
              <img
                src="/assets/icons/search.png"
                alt="search"
              />
            </div>
            <div className="menuOptionsItem">
              <img
                src="/assets/icons/shopping-cart.png"
                alt="shopping-cart"
              />
            </div>
            <div className="menuOptionsItem">
              <a
                href="https://github.com/iamdevmarcos/"
                target="_blank"
              >
                <img
                  className="avatar"
                  src="/assets/icons/profile.png"
                  alt="Hey, I'm Marcos"
                />
              </a>
            </div>
          </div>
        </C.Menu>

        <C.Body>
          <C.Title>Be Minimalism.</C.Title>
          <C.Desc>Get many aesthetic and unique furnitures for your room.</C.Desc>
          <C.Button>
            <button>
              Discover
              <img 
                src="/assets/icons/arrow.png"
                alt="arrow"
              />
            </button>
          </C.Button>
        </C.Body>
      </C.Area>
    </C.Container>
  );
}

export default App;