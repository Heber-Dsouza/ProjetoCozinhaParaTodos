export const goToLoginPage = (navigate) => {
  navigate('/entrar')
}

export const goToSignupPage = (navigate) => {
  navigate('/cadastrar')
}

export const goToRecipeListPage = (navigate) => {
  navigate('/')
}

export const goToRecipeDetailPage = (navigate, id) => {
  navigate(`/detalhe/${id}`)
}

export const goToAddRecipesPage = (navigate) => {
  navigate('/adicionar-receita')
}

export const goToTermsPage = (navigate) => {
  navigate('/cadastrar/termos')
}