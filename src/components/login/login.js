import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text,Button ,Alert} from 'react-native';

import loginSerivce from '../../service/auth/auth'
import Header from 'react-natvie-test'
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        };
    }

    registertoken(token){

        loginSerivce.saveLocalUser(token).then((result)=>{
           

        }
    )

    }
    loginAuth(){
       
let data={
email:this.state.email,
password:this.state.password

}

        loginSerivce.authenticate(data).then((result)=>{
            alert(JSON.stringify(result))
            if(result.status==200){
                this.props.navigation.navigate('Home', { name: 'Home' })
          this.registertoken(result.token)
          
                
            }
        }
    
    )
    }

    render() {
       

        return (
            <View style={styles.globaleView} >
                <Header headerText={"login"}/>


                <View style={styles.viewInput}>
                    <View style={styles.viewInputEmail}>
                        <TextInput
                           style={{ backgroundColor: "white", height: 50 ,borderRadius:12 }} 
                           autoCapitalize={'none'}
                            placeholder=" email"
                            onChangeText={(text) => this.setState({email :text})}
                        />
                    </View><View style={styles.viewInputPassword}>
                        <TextInput
                          style={{ backgroundColor: "white", height: 50 ,borderRadius:12 }}
                            placeholder="  password"
                            autoCapitalize={'none'}
                            onChangeText={(text) => this.setState({password :text})}
                        />
                        </View><View style={styles.viewButton}>
                        <Button title="hello"  
                         
                          accessibilityLabel="Learn more about this purple button" onPress={() => {
                           
                            this.loginAuth()
                          }} >
                          </Button>
                    </View>
                </View>
                <View style={styles.globaleView}>

                </View>

            </View>
        );
    }
}
const styles = StyleSheet.create({

    globaleView: {

        flex: 1,
    },
    viewInput: {
        justifyContent: 'center',
        flex: 1,
        borderRadius:15,
        padding: 15,
        flexDirection: 'column',
        backgroundColor: 'powderblue',
        margin: 20,
    }
    ,
    viewInputEmail: {
        
        justifyContent: 'center',
        flex: 1,
       
        padding: 15,
        flexDirection: 'column',
    }
    ,
    viewInputPassword: {
        
        justifyContent: 'center',
        flex: 1,
       
        padding: 15,
        flexDirection: 'column',
    },
    viewButton: {
        
        justifyContent: 'center',
        flex: 1,
       
        padding: 15,
        flexDirection: 'column',
    },
})