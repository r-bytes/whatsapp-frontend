import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Theme from "./styles/theme";
import { StateContext } from "./context/StateContext";
import reducer, { initialState } from "./context/reducer";
import { ReducerProvider } from "./context/ReducerProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ReducerProvider initialState={initialState} reducer={reducer} >
            <StateContext>
                <Theme>
                    <App />
                </Theme>
            </StateContext>
        </ReducerProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
