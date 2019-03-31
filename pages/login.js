import fetch from "isomorphic-unfetch";
import createConfig from "../api/createConfig";
import Link from "next/link";
import FavoritProducts from '../components/FavatioyProducts'
import Layout from '../components/Layout'
import LogInForm from '../components/LogInForm'

const Login = props => (
  <Layout>
    <LogInForm/>
  </Layout>
);


export default Login;
