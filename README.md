# Global Office 365 Developer Bootcamp Barcelona 2018 
En este repositorio podrás encontrar los materiales utilizados en el Workshop **SPFx for Ningas** Global Office 365 Developer Bootcamp Barcelona 2018 .

## Ponentes
1. Adrián Díaz - MS Office Development MVP [@AdrianDiaz81](https://twitter.com/AdrianDiaz81)
2. Juan Carlos Martinez - Software Architect at Encamina [@jcmartinezg23](https://twitter.com/jcmartinezg23)

# SPFx for Ninjas

## Pre-requisitos

Para completar el workshop, previamente se debe configurar tanto la tenant de Office 365, como el entorno local. Para ello se recomienda seguir los siguientes artículos:

1. [Setup your Office 365 Tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)
2. [Set up your SharePoint Framework development environment](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-development-environment)

# Elección del FrameWork
Desde el equipo de SharePoint se ha hecho mucho hincapie que SPFx es agnostico al framework/libreria que queramos elegir durante nuestro desarrollo. Dicho esto esta claro que hay un Framework que es el que más se utiliza dentro de los desarrollos, ese no es otro que ReactJS.  En este Workshop vamos a ver como implementar el patrón **FLUX** y ver como poder solucionar temas de perfomance dentro de nuestros desarllos

## Porqué ReactJS y porque en SharePoint

Si bien es cierto que hay multitud de frameworks/librerias JS y la elección de una o otra se puede hacer dependiendo de las skills que tiene tu equipo de desarrollo. Sinos ceñimos a lo que son desarrollos de SharePoint y su integración dentro de SharePoint Online, si tenemos que elegir una frameworks/libreria buscariamos una libreria ligera que solamente se encargue de la vista. De forma que lo que tenga que hacer lo haga muy bien y sea su función. Esto encaja con el principio sobre el cual debemos de extender SharePoint (ya sea online o onpremise). 
Ahora bien pueden haber supuestos en los que es necesario que nuestro desarrollo sea un poco más complejo y sea necesario añadirle más "complementos" a nuestro desarrollo. Es decir necesitaremos enrutado, acciones, .... Con todo esto ReactJS tiene una serie de librerias que si pueden incorporar react-redux,redux-thunk, etc...  
Todo esto esta muy bien, que es lo novedoso que trae ReactJS y su implementación el patrón FLUX

### Qué es el patrón FLUX 
Flux es una patrón/arquitectura  para el manejo y el flujo de los datos en una aplicación web. Fue ideada por el equipo de Facebook siendo su funcionalidad principal facilitar el manejo de datos en aplicaciones web con cierto grado de complejidad.

Estamos acostumbrados a las arquitecturas MVC en la que hay un flujo de datos bidireccional, es decir cualquier modificación en el servidor se modifica en la vista y viceversa, esto hace que en flujos complejos los problemas de rendimiento están a la orden del día. Con Flux esto cambia, propone una arquitectura en la que el flujo de datos es unidireccional. Los datos viajan desde la vista por medio de acciones y llegan a un Store desde el cual se actualizará la vista de nuevo.

![patronflux](./assets/flux.png)

Teniendo todo el flujo de la aplicación centralizado es mucho más sencillo depurar las aplicaciones y encontrar los errores en la misma.

Que actores entran en juego en una arquitectura Flux:

·       **Vista**: Serían los propios componentes de React.

·       **Store**: Guarda los datos de la aplicación. No hay métodos en la store que permitan modificar directamente sobre ella, se tiene que hacer a través de dispatcher y acciones.

·       **Actions o Acciones**: Una acción es simplemente un objeto que indica una intención de realizar algo y que lleva datos asociados en caso de ser necesario.

·       **Dispatcher**:  No es más que un mediador entre la Store y las acciones. Sirve para desacoplar la Store de la vista, ya que así no es necesario conocer que Store maneja una acción concreta.

El flujo que sigue la aplicación sería el siguiente:

·       La vista, mediante un evento envía una acción con la intención de realizar un cambio en el estado.

·       La acción contiene el tipo y los datos, y es enviada al dispatcher.

·       El dispatcher propaga la acción al Store y se procesa en orden de llegada.

·       El Store recibe la acción y dependiendo del tipo recibido, actualiza el estado y notifica a las vistas de ese cambio.

·       La vista recibe la notificación y se actualiza con los cambios.

Este patrón se puede implementar bien de forma propia o bien utilizando alguna librería como pueda ser Redux, ReFlux, Fluxxor, Fluxible, etc…  De todas ellas la más utilizada es Redux, es una pequeña librería de menos de 2kb y que con unos pocos métodos implementa el patrón Flux. Es agnóstica al framework por lo que esta se puede implementar en otros frameworks como Angular, Vue, etc.

#### ¿Qué hace Redux?

Se encarga en cierta manera de desacoplar el estado global de una aplicación web de la parte visual. El estado de la aplicación pueden ser varias cosas, normalmente se trata los datos que se reciben a través de peticiones a servicios REST (consultas a listas de SharePoint). Pero también se refiere al estado de la UI en un determinado momento, por ejemplo: mostrar una información al usuario o no, un mensaje de error, ocultar desplegar un panel, etc.

Los conceptos claves de Redux:

**1.- La Store**=> La única fuente de datos, aunque el patrón Flux indica que pueden haber más de una store, Redux simplifica unificando todo en un único árbol.

**2.- El Estado**=> Solo podemos modificar el estado a través de acciones

**3.- Reducers**=> Es básicamente una función que recibe dos parámetros, el estado inicial y una acción y dependiendo del tipo de acción realizará una operación u otra en el estado.

# Show me the Code Talk is Cheap !! 


