// import React from 'react';
// import { View, Text, Button, Image } from 'react-native';

// const  DetailScreen = ({navigation, route}) => {
//     const {item} = route?.params

//     const handlerBack = () => {
//         navigation.goBack()
//     }
//     return (
//         <View style={{ flex: 1}}>
//             <Text style={{color:'black',margin:12}}>Nama: {item.nama}</Text>
//             <Text style={{color:'black',margin:12}}>Usia: {item.usia}</Text>
//             <Text style={{color:'black',margin:12}}>Alamat: {item.alamat}</Text>
//             <Button title='Back' onPress={() => handlerBack()}/>
//         </View>
//     );
// }
// export default DetailScreen


// homescreen/DetailScreen.js
// import React from 'react';
// import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';

// const DetailScreen = ({ route }) => {
//   const { imageUrl, title, description, harga } = route.params;

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Image
//         source={{ uri: imageUrl }}
//         style={styles.image}
//       />
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.description}>{description}</Text>
//       <Text style={styles.hrg}>{harga}</Text>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     alignItems: 'center',
//   },
//   image: {
//     width: Dimensions.get('window').width - 32,
//     height: 300,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 8,
//     color:'red'
//   },
//   description: {
//     fontSize: 16,
//     color: 'black',
//   },
//   hrg:{
//     fontSize: 30,
//     color: 'red',
//     fontWeight:'bold'
//   }
// });

// export default DetailScreen;



import React from 'react';
import { View, Text, Button,FlatList,TouchableOpacity } from 'react-native';

const  DetailScreen = ({navigation, route}) => {
    const {item} = route?.params

    const handlerBack = () => {
        navigation.goBack()
    }
    const renderItem = ({item, index}) => {
        return (
              <View style={{ width:'100%', justifyContent:'center', backgroundColor:'white', backgroundColor:'cyan'}}>
                  <Text style={{color:'black'}}>{item.number}</Text>
                  <Text style={{color:'black'}}>{item.text}</Text>
              </View>
          
          
        )
      }
    return (
        <View style={{ flex: 1, backgroundColor:'green'}}>
            <FlatList
                data={item}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
        
    );
}
export default DetailScreen