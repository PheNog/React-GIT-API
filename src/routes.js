import React from 'react';
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import {Repositories} from './pages/repositories/index.js'
import {App as Home} from './pages/home/index.js'

//necessario usar o <> e </> para puxar os elementos.

export function Router() {
    return(
        <BrowserRouter basesename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path='/React-GIT-API' element={<Home />} />
                <Route path='/repositories' element={<Repositories />} /> 
            </Routes>
        </BrowserRouter> 
    )    

}
