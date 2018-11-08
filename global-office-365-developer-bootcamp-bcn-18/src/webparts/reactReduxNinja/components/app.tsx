import * as React from 'react';
import { Version } from '@microsoft/sp-core-library';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';



export interface IReactReduxNinjaWebPartProps {
  description: string;
  store:any;
  domElement:any,
}

export default class App  extends React.Component<IReactReduxNinjaWebPartProps, any> {  

  public render(): any {    
      const routes = RoutesModule.routes;
      const baseUrl = "/temp/workbench.html";
       return(
       <AppContainer>
        <Provider store={this.props.store}>
            <BrowserRouter children={routes} basename={baseUrl} />
        </Provider>
    </AppContainer>)
       
  }
 
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: ""
          },
          groups: [
            {
              groupName: "",
              groupFields: [
                PropertyPaneTextField('description', {
                  label: ""
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
