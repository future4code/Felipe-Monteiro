export const goToLogin = (history) =>{
    history.push("/login")
}
export const goToAreaAdmin = (history) =>{
    history.push("/area-admin")
}
export const goToInscreverViagem = (history) =>{
    history.push("/inscreverparaviagem")
}
export const goToCriarViagem = (history) =>{
    history.push("/criarviagem")
}
export const goToHome = (history) =>{
    history.push("/")
}

export const goToListaViagens = (history) =>{
    history.push(`/listaviagens`)
}
export const goToDetalhesViagem = (history, id) =>{
    history.push(`/detalhes/${id}`)
}
export const goToError = (history) =>{
    history.push("/error")
}

