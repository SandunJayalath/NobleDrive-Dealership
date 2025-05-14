import { BrowseRouter, Routes, Route, Navigate } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowseRouter>
        <Routes>
            <Route path='/SignInAdPage' element={<SignInAdPage/>}/>
        </Routes>
    </BrowseRouter>
)
