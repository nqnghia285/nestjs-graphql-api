export interface System {
   node_env: 'development' | 'production' | 'test' | 'provision'
   host: '0.0.0.0' | 'localhost' | '127.0.0.1'
   port: number
   origin: string
   url: string
   graphql_path: string
   jwt_key: string
   token_name: string
   author: string
}
