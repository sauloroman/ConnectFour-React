import { HashRouter, Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RulesPage, ConnectPlayerVsCPUPage, ConnectPlayerVsPlayerPage } from "../pages"

export const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/rules" element={ <RulesPage /> }/>

        {/* PRIVATE ROUTES */}
        <Route path="/connect/playervscpu" element={<ConnectPlayerVsCPUPage />} />
        <Route path="/connect/player1vsplayer2" element={<ConnectPlayerVsPlayerPage />} />

        <Route path="/*" element={ <Navigate to="/"/>} />

      </Routes>
    </HashRouter>
  )
}
