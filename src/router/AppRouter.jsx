import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RulesPage, ConnectPlayGamePage } from "../pages"

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/rules" element={ <RulesPage /> }/>

        {/* PRIVATE ROUTES */}
        <Route path="/connect/playGame" element={<ConnectPlayGamePage />} />

        <Route path="/*" element={ <Navigate to="/"/>} />

      </Routes>
    </HashRouter>
  )
}
