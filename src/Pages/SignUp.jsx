import React, { createContext, useContext, useReducer } from 'react';
const FormDataContext = createContext();
const initialState = {
  fullName: '',
  email: '',
  password: '',
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return { ...state, [action.payload.name]: action.payload.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const useFormContext = () => useContext(FormDataContext);

export default function SignUp() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_FIELD',
      payload: { name, value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: 'RESET' });
  };

  return (
    <FormDataContext.Provider value={state}>
      <>
        <style>
          {`
            .form-box {
              max-width: 300px;
              background: #f1f7fe;
              overflow: hidden;
              border-radius: 16px;
              color: #010101;
            }
  
            .form {
              position: relative;
              display: flex;
              flex-direction: column;
              padding: 32px 24px 24px;
              gap: 16px;
              text-align: center;
            }
  
            /*Form text*/
            .title {
              font-weight: bold;
              font-size: 1.6rem;
            }
  
            .subtitle {
              font-size: 1rem;
              color: #666;
            }
  
            /*Inputs box*/
            .form-container {
              overflow: hidden;
              border-radius: 8px;
              background-color: #fff;
              margin: 1rem 0 .5rem;
              width: 100%;
            }
  
            .input {
              background: none;
              border: 0;
              outline: 0;
              height: 40px;
              width: 100%;
              border-bottom: 1px solid #eee;
              font-size: .9rem;
              padding: 8px 15px;
            }
  
           
  
            .form-section a {
              font-weight: bold;
              color: #0066ff;
              transition: color .3s ease;
            }
  
            .form-section a:hover {
              color: #005ce6;
              text-decoration: underline;
            }
            .btn {
              --btn-gradient: var(--btn-gradient-from),var(--btn-gradient-to);
              border: 0 none;
              appearance: none;
              transition: all .3s;
              border-radius: 10px;
              background-color: var(--btn-bg);
              box-shadow: 0 0 2px 2px var(--btn-shadow), 0 0 4px 4px var(--btn-shadow), 0 0 8px 8px var(--btn-shadow);
            }
            
            .btn,
            .btn * {
              box-sizing: border-box;
            }
            
            .btn-inner {
              position: relative;
              border-radius: inherit;
              border: 1px solid transparent;
              font-size: 1rem;
              display: flex;
              align-items: center;
              min-width: 10rem;
              padding: 1.5rem 2rem;
              overflow: hidden;
              color: var(--btn-text-color);
            }
            
            .btn-label {
              position: absolute;
              bottom: 1px;
              left: 1px;
              right: 1px;
              top: 1px;
              border-radius: inherit;
              z-index: 10;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: var(--btn-bg);
              background-image: linear-gradient(to bottom,var(--btn-gradient));
            }
            
            .btn:hover {
              transform: translateY(-5px);
              letter-spacing: 3px;
              box-shadow: rgba(0, 131, 253, 0.596) 0px 1px 80px 40px;
            }
            
            .btn:active {
              border-radius: 40px;
              transform: translateY(4px);
              transition: 0.1s;
              letter-spacing: 3px;
              box-shadow: rgb(0, 131, 253) 0px 1px 80px 40px;
            }
            
            .btn:active .btn-blur:before {
              --transition: 0.5s;
            }
            
            .btn--primary {
              --btn-bg: #111111;
              --btn-gradient-from: #111111;
              --btn-gradient-to: rgba(29, 6, 240, 0.5);
              --btn-text-color: #ffffff;
              --btn-shadow: #9b14c438;
            }
            
          
            
          `}
        </style>
        <div className="container d-flex justify-content-center">
          <div className="form-box">
            <form className="form" onSubmit={handleSubmit}>
              <span className="title">Sign up</span>
              <span className="subtitle">Create a free account with your email.</span>
              <div className="form-container">
                <input
                  type="text"
                  className="input"
                  placeholder="Full Name"
                  name="fullName"
                  value={state.fullName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                  name="password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
              <button class="btn btn--primary">

                <span class="btn-inner">
                  <span class="btn-label">
                    Button
                  </span>
                </span>

              </button>
            </form>

          </div>
        </div>
      </>
    </FormDataContext.Provider>
  );
}


