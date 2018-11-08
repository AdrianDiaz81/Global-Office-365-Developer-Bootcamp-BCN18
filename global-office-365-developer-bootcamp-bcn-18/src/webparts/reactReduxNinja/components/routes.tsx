import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './Layout';
import {ListPlayerContainer} from './player/listPlayerContainer';
import  {AddPlayerContainer} from './player/addPlayerContainer';
import {EditPlayerContainer } from './player/editPlayerContainer';

const exact: boolean = true;
debugger;
export const routes =
    <Layout>
    <Route  exact={exact}  path='/' component={ListPlayerContainer} />
    <Route exact={exact} path='/anyadir' component={AddPlayerContainer} />
    <Route exact path="/editar/:id" component={EditPlayerContainer} />
    </Layout>;