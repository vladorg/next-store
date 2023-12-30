import Credentials from "next-auth/providers/credentials"
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    Credentials({
      credentials: {
        login: { label: "login", type: "text" },
        password: { label: "password", type: "password" }
      },
      // async authorize(credentials) {
      //   const { login, password } = credentials;

      //   const user = await UsersModel.findOne({ login }); // check login exists
  
      //   if (user) {

      //     const passCompare = bcrypt.compareSync(password, user.password);
    
      //     if (passCompare) {
      //       return user            
      //     } else {
      //       console.log('incorrect pass!');
      //     }
          
      //   } else {
      //     console.log('user is not exists!');
      //   }       

      //   return null
      // }
    })
  ],
  pages: {
    signIn: '/auth'
  },
  callbacks: {
    // async jwt({ token, account }) {
    //   //console.log(1, token);
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token
    //   }
    //   return token
    // },
    // async session({ session, token, user }) {
    //   // Send properties to the client, like an access_token from a provider.
    //   session.accessToken = token.accessToken
    //   return session
    // }
  }
}
