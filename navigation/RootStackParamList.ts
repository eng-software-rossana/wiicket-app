export type RootStackParamList = {
  SignUp: undefined;
  Login: undefined;
  Payment: undefined;
  PcBuild: undefined;
  ResumeOrder: { order: string[] };
  TabHome: {
    screen?: string;
    product?: string;
  };
  ProductPage: {
    productID?: string;
  };
};
