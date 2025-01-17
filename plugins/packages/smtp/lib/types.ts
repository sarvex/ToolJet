export type SourceOptions = {
  host: string; 
  port: string; 
  user: string;
  password: string;
};
export type QueryOptions = {
  operation: string;
  from:string,
  from_name:string,
  to:string,
  subject:string,
  textContent:string,
  htmlContent:string,
};