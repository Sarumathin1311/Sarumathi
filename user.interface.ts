export interface User {
  name: string;
  address?: { //?means it is optional member
    street?: string;
    postcode?: string;
  }
}