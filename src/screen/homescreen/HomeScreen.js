// import { useNavigation } from '@react-navigation/native'
// import React, { useState } from 'react'
// import {View,Text,FlatList, Image, Touchable, TouchableOpacity} from 'react-native'

// const HomeScreen = ({navigation}) => {
//     const [data,setData] = useState([
//         {
//             image:source={uri:'https://img-ap-1.trovit.com/img1id/1xU1CT1zJlM/1xU1CT1zJlM.3_11.jpg'},
//             nama:"Amar",
//             usia:18,
//             alamat:"Jl Batu"
//         },
//         {
//             nama:"Angga",
//             usia:18,
//             alamat:"Jl Wonosari"
//         },
       
//     ])

//     const handlerNavigateToDetail = (item) => {
//         navigation.navigate("Detail", { item: item})
//     }

//     const renderItem = ({item, index}) => {
//       return (
//         <TouchableOpacity activeOpacity={0.9} onPress={() => handlerNavigateToDetail(item) }>
//             <View style={{height:300, width:'100%', justifyContent:'center',padding:12, backgroundColor:'white',elevation:5, marginTop:12}}>
//                 <Image style={{width:80,height:40}}>{source.image}</Image>

//             </View>
//         </TouchableOpacity>
        
//       )
//     }

//     return (
//         <View style={{flex:1}}>
//             <FlatList
//                 data={data}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderItem}
//             />

//         </View>
//     )
// }

// export default HomeScreen

// homescreen/HomeScreen.js
// import React from 'react';
// import { View, Text, TextInput, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

// Data sample untuk FlatList
// const data = [
//   {
//     id: '1',
//     title: 'Kos Alex',
//     imageUrl: 'https://img-ap-1.trovit.com/img1id/1xU1CT1zJlM/1xU1CT1zJlM.3_11.jpg',
//     alamat: 'jl.gatot'
//   },
//   {
//     id: '2',
//     title: 'Kos Baguscoro',
//     imageUrl: 'https://img-ap-1.trovit.com/img1id/1xU1CT1zJlM/1xU1CT1zJlM.3_11.jpg', 
//     alamat: 'jl.badang'
//   },
//   {
//     id: '2',
//     title: 'Kos Baguscoro',
//     imageUrl: 'https://img-ap-1.trovit.com/img1id/1xU1CT1zJlM/1xU1CT1zJlM.3_11.jpg', 
//     alamat: 'jl.patiunus'
//   },
//   {
//     id: '2',
//     title: 'Kos Baguscoro',
//     imageUrl: 'https://img-ap-1.trovit.com/img1id/1xU1CT1zJlM/1xU1CT1zJlM.3_11.jpg', 
//     alamat: 'jl.subrtot'
//   },
//   {
//     id: '2',
//     title: 'Kos Baguscoro',
//     imageUrl: 'https://img-ap-1.trovit.com/img1id/1xU1CT1zJlM/1xU1CT1zJlM.3_11.jpg', 
//     alamat: 'jl.manokwari'
//   },
// ];

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Cari kos kah?"
//       />
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Image
//               source={{ uri: item.imageUrl }}
//               style={styles.image}
//             />
//             <Text style={styles.itemTitle}>{item.title}</Text>
//             <Text style={styles.alamat}>{item.alamat}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   input: {
//     height: 40,
//     borderColor: 'black',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 16,
//   },
//   itemContainer: {
//     marginBottom: 16,
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   image: {
//     width: Dimensions.get('window').width - 32, // Menyesuaikan lebar gambar dengan lebar layar
//     height: 200, // Atur tinggi gambar sesuai kebutuhan
//   },
//   itemTitle: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     color:'black'
//   },
//   alamat: {
//     fontSize: 15,
//     color:'black',
//     marginLeft:15
//   }
// });

// export default HomeScreen;

// homescreen/HomeScreen.js
// import { useNavigation } from '@react-navigation/native'
// import React, { useState } from 'react'
// import {View,Text,FlatList, Image, Touchable, TouchableOpacity, StyleSheet, TextInput, ScrollView} from 'react-native'

// const HomeScreen = ({navigation}) => {
//     const [data,setData] = useState([
//         {
//             photo:"data:image/jpeg;base64,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",
//             kos:'Campur',
//             deskripsi:"Kost Rayz sugidi magidi Tipe S Kesiangan Surabaya Jawa Timur 4SL3B3VV",
//             icon:"https://cdn-icons-png.flaticon.com/128/2838/2838912.png",
//             alamat:"Kecamatan Kebon Jeruk",
//             fasilitas:'K. Mandi Dalam kloset Berdiri. Wifi. Free Parking',
//             icon1:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Solid_Bright_Green_Star_1.png',
//             rating:4.7,
//             diskon:'Diskon 500rb',
//             icon2:'https://cdn-icons-png.flaticon.com/128/9296/9296739.png',
//             coret:'Rp1.099.000',
//             harga:"Rp500.999",
//             bulan:'(Bulan pertama)'
//         },
//         {
//             photo:"data:image/jpeg;base64,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",
//             kos:'Campur',
//             deskripsi:"Kost Rayz sugidi magidi Tipe S Kesiangan Surabaya Jawa Timur 4SL3B3VV",
//             icon:"https://cdn-icons-png.flaticon.com/128/2838/2838912.png",
//             alamat:"Kecamatan Kebon Jeruk",
//             fasilitas:' Breakfeast. K. Mandi Dalam-Kloset Duduk-K. Wifi. Free Parking',
//             icon1:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Solid_Bright_Green_Star_1.png',
//             rating:3.5,
//             diskon:'Diskon 300rb',
//             icon2:'https://cdn-icons-png.flaticon.com/128/9296/9296739.png',
//             coret:'Rp1.099.000',
//             harga:"Rp799.000",
//             bulan:'(Bulan pertama)'
//         },
//         {
//             photo:"https://mommiesdaily.com/wp-content/uploads/2022/04/DSC00124.jpeg",
//             kos:'Campur',
//             deskripsi:"Kost Rayz sugidi magidi Tipe S Kesiangan Surabaya Jawa Timur 4SL3B3VV",
//             icon:"https://cdn-icons-png.flaticon.com/128/2838/2838912.png",
//             alamat:"Kecamatan Kebon Jeruk",
//             fasilitas:'K. Mandi Dalam-Kloset Duduk-K. Wifi. Free Parking. ',
//             icon1:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Solid_Bright_Green_Star_1.png',
//             rating:4.1,
//             diskon:'Diskon 1,4jt',
//             icon2:'https://cdn-icons-png.flaticon.com/128/9296/9296739.png',
//             coret:'Rp2.500.000',
//             harga:"Rp1.099.000",
//             bulan:'(Bulan pertama)'
//         },
//         {
//             photo:"https://mommiesdaily.com/wp-content/uploads/2022/04/DSC00124.jpeg",
//             kos:'Campur',
//             deskripsi:"Kost Rayz sugidi magidi Tipe S Kesiangan Surabaya Jawa Timur 4SL3B3VV",
//             icon:"https://cdn-icons-png.flaticon.com/128/2838/2838912.png",
//             alamat:"Kecamatan Kebon Jeruk",
//             fasilitas:'K. Mandi Dalam-Kloset Duduk-K. Wifi. Free Parking',
//             icon1:'https://upload.wikimedia.org/wikipedia/commons/e/e4/Solid_Bright_Green_Star_1.png',
//             rating:4.9,
//             diskon:'Diskon 2jt',
//             icon2:'https://cdn-icons-png.flaticon.com/128/9296/9296739.png',
//             coret:'Rp3.789.000',
//             harga:"Rp1.789.000",
//             bulan:'(Bulan pertama)'
//         },
        
//     ])

//     const handlerNavigateToDetail = (item) => {
//         navigation.navigate("Detail", { item: item})
//     }
 
//     const renderItem = ({item, index}) => {
//       return (
//         <TouchableOpacity activeOpacity={0.7} onPress={() => handlerNavigateToDetail(item) }>
//             {/* <View style={{width:'100%',height:400, backgroundColor:'#be2edd',marginTop:50,justifyContent:'center'}}> */}
//             <View style={{}}>
//               <View>
//                    <View style={{height:340,width:220,borderRadius:10,marginTop:30, backgroundColor:'white',elevation:5,marginHorizontal:7}}>
//                        {/* Image */}
//                         <Image source={{uri:item.photo}}
//                          style={styles.image}
//                          />
//                          <View style={{margin:10}}>
//                            <View>
//                              <Text style={{color:'black',padding:1,paddingStart:8,fontSize:10,borderColor:'silver',borderWidth:1,borderRadius:3,width:60}}>{item.kos}</Text>
//                            </View>
//                            <Text style={styles.deskripsi} numberOfLines={1} ellipsizeMode="tail">{item.deskripsi}</Text>
//                            <View style={{flexDirection:'row',alignItems:'center'}}>
//                                <Image source={{uri:item.icon}}
//                                  style={styles.icon}
//                                 />
//                                 <Text style={{color:'black', marginLeft:5, fontSize:12, fontWeight:'500'}}>{item.alamat}</Text>
//                            </View>
//                            <Text style={styles.deskripsi2} numberOfLines={1} ellipsizeMode="tail">{item.fasilitas}</Text>
//                            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
//                                <Image source={{uri:item.icon1}}
//                                  style={styles.icon}
//                                  />
//                                 <Text style={{color:'black', marginLeft:5, fontSize:12, fontWeight:'bold'}}>{item.rating}</Text>
//                            </View>
//                            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
//                                <Image source={{uri:item.icon2}}
//                                  style={styles.icon}
//                                  />
//                                 <Text style={{color:'black', marginLeft:5, fontSize:12,color:'#b71540', fontWeight:'500'}}>{item.diskon}</Text>
//                                 <Text style={{ marginLeft:5, fontSize:12,color:'silver', fontWeight:'500', textDecorationLine: 'line-through'}}>{item.coret}</Text>
//                            </View>
//                            <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
//                                 <Text style={{color:'black', marginLeft:5, fontSize:12,color:'black', fontWeight:'bold'}}>{item.harga}</Text>
//                                 <Text style={{color:'black', marginLeft:5, fontSize:12,color:'black', fontWeight:'400'}}>{item.bulan}</Text>
//                            </View>
//                         </View>
//                    </View>
//                  </View>
//             </View>
//             {/* </View> */}
//         </TouchableOpacity>
        
//       )
//     }

//     return (
//       <ScrollView>
//         <View style={{flex:1, backgroundColor:'white'}}>
//         <View style={{height:50,width:'100%',flexDirection:'row',alignItems:'center',marginLeft:10,}}>
//             <Image style={{height:50,width:200}} source={{uri:'https://cdn.antaranews.com/cache/1200x800/2020/04/24/mamikos.jpg'}}/>
//             <Image style={{height:30,width:40,marginLeft:150}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvpILaOQ3oP68CSweVgJZua7FoNMwJ1lUqsQ&s'}}/>
//         </View>
//         <View style={{height:150,width:'100%',marginTop:20,marginLeft:10, flexDirection:'row'}}>
//         <View style={{height:100,width:250, flexDirection:'column'}}>
//           <Text style={{fontWeight:'bold',fontSize:25,color:'black',}}>#EnaknyaNgekos</Text>
//           <Text style={{fontSize:16,color:'black',fontWeight:'bold'}}>Cari & Sewa Kos Mudah</Text>
//         </View>
//           <Image style={{height:90, width:80,marginLeft:40}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8PLbfyXUCScH33q2wRWSLugQENtZEFA1D-Q&s'}}/>
//         </View>
//         <View>
//         <TextInput style={{width:390,height:50,borderWidth:1,borderColor:'grey',borderRadius:9,marginLeft:10,marginTop:-60,color:'black'}} placeholderTextColor={'grey'} placeholder='               Mau cari kos dimana?'/>
//           <Image style={{width:40,height:40,marginTop:-43,marginLeft:15}} source={{uri:'https://www.shutterstock.com/image-vector/magnifying-glass-search-icon-flat-260nw-738763579.jpg'}}/>
//         <Text style={{height:50,width:'100%',color:'grey',fontWeight:'bold',marginLeft:10,marginTop:20}}>Atau mau cari yang lain?</Text>
//         <View style={{borderRadius:9,width:390,height:50,borderWidth:1,borderColor:'grey',marginLeft:10,marginTop:-20}}>
//         <Image style={{width:40,height:40,marginTop:5,marginLeft:5}} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnT5guyVcf9VqqOth_kT7U0184ZyT5m_TiQ&s'}}/>
//           <Text style={{color:'black',marginLeft:70,marginTop:-30,fontWeight:'bold'}}>Apartement</Text>
//           <Image style={{width:30,height:30,marginTop:-28,marginLeft:350}} source={{uri:'https://w7.pngwing.com/pngs/54/913/png-transparent-arrow-forward-navigation-next-right-essentials-pack-icon.png'}}/>
//         </View>
//         <View style={{width:390,height:50,borderWidth:1,borderColor:'grey',marginLeft:10,marginTop:15,borderRadius:9,backgroundColor:'green'}}>
//         <Text style={{color:'white',marginLeft:20,marginTop:10}}>Anda pemilik iklan ?</Text>
//         </View>
//         <View style={{width:'100%',height:300, backgroundColor:'white',marginTop:50,justifyContent:'center'}}>
//         <ScrollView horizontal>
//         <Image style={styles.image2} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqS1bolyutcfHu8rzscP1jyNUTj2QORdvWA&s'}}/>
//           <Image style={styles.image2} source={{uri:'https://blog-static.mamikos.com/wp-content/uploads/2021/09/mamiads-free-trial.png'}}/>
//           <Image style={styles.image2} source={{uri:'https://blog-static.mamikos.com/wp-content/uploads/2021/09/mamiads-free-trial.png'}}/>
//         </ScrollView>
//         </View>
//         </View>
//             <View style={{width:'100%',height:400, backgroundColor:'#432c78',marginTop:50,justifyContent:'center'}}>
//                <FlatList horizontal
//                 data={data}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={renderItem}
//                />
//             </View>
//         </View>
//         </ScrollView>
//     )
// }

// const styles = StyleSheet.create({
//     image: {
//         width:220,
//         height:150,
//         borderTopLeftRadius:10,
//         borderTopRightRadius:10
//     },
//     image2:{
//         width:400,
//         height:200,
//         borderTopLeftRadius:10,
//         borderTopRightRadius:10,
//         marginLeft:6
//     },
//     icon: {
//         width:15,
//         height:15,
        
//     },
//     deskripsi: {
//         width:'100%',
//         fontSize:13,
//         color:'black'
//     },
//     deskripsi2:{
//       width:'100%',
//         fontSize:13,
//         color:'silver'
//     }
// })

// export default HomeScreen

import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';

export default function RestApi({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataALQuran();
  }, []);

  const getDataALQuran = async () => {
    try {
      const response = await fetch('https://api.alquran.cloud/v1/quran/en.asad');
      const data = await response.json();
      setData(data.data.surahs);
    } catch (error) {
      console.log('error masbro', error);
    }
  };

  const handlerNavigateToDetail = (item) => {
    navigation.navigate("Detail", { item: item})
}

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.9} onPress={() => handlerNavigateToDetail(item.ayahs) }>
          <View style={{height:50, width:'100%', justifyContent:'center',padding:12, backgroundColor:'white',elevation:5, marginTop:12,}}>
              <Text style={{color:'black'}}>{item.englishName}</Text>
              <Text style={{color:'black'}}>{item.number}</Text>
              <View>
              <Text style={{color:'black',marginTop:-40}}>{item.name}</Text>
              </View>
          </View>
          
      </TouchableOpacity>
      
    )
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.number.toString()}
      renderItem={renderItem}
    />
  );
}
