import { useNavigate } from "react-router-dom"

export const useGoPage = () => {

  const navigate = useNavigate();

  const onGoPage = ( path ) => {
    navigate( path );
  }

  return {
    onGoPage
  }
}
