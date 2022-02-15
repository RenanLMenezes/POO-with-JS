// duck typing

export class AuthenticatorSystem{
    static login(authenticable , password){
        if(AuthenticatorSystem.canAuthenticable(authenticable)){
            return authenticable.authenticate(password)
        }
        return false
    }

    static canAuthenticable(authenticable){
        return "authenticate" in authenticable && authenticable.authenticate instanceof Function
    }
}