import React from 'react'
import { FlatList, Pressable, View } from 'react-native'
import { Button, DataTable, Divider, Headline, IconButton, List, MD2Colors, MD3Colors, Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack';
import { RootUserStackParams } from '../../navigation/UserStackNavigation';
import { pedidos } from '../../clientes';
//@ts-ignore
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { theme } from '../../../App';
interface Props extends StackScreenProps<RootUserStackParams,'VerCliente'>{}



export const VerClienteScreen = ({navigation,route}:Props) => {
    const cliente = route.params;
    const [page, setPage] = React.useState<number>(0);
    const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
    const [itemsPerPage, onItemsPerPageChange] = React.useState(
      5
    );
    const [items] = React.useState(pedidos)

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length);
  
    React.useEffect(() => {
      setPage(0);
    }, [itemsPerPage]);
  
  return (
    <View style={{flex:1,backgroundColor:'#3c3c44'}}>
        {cliente && 
            <List.Accordion
            style={{backgroundColor:'#3c3c44'}}
            titleStyle={{color:'#04acb4',fontSize:20}}
            title={cliente.nombreNegocio}
            left={props => <List.Icon {...props}  icon="store" />}>
            <List.Section style={{backgroundColor:'#fff'}}>
                <List.Item title={`${cliente.nombreDueño}`} left={() => <List.Icon icon="account" />}/>
                <List.Item title={`${cliente.telefono}`} left={() => <List.Icon icon="phone" />}/>
               <List.Item title={`${cliente.email}`} left={() => <List.Icon icon="email" />}/>
                <List.Item title={`${cliente.localidad}`} left={() => <List.Icon icon="map" />}/>
               <List.Item title={`${cliente.direccion} ${cliente.altura}`} left={() => <List.Icon icon="map-marker" />}/>
            </List.Section>
            </List.Accordion>
        }
        <Text style={{fontSize:20, color:'#04acb4', fontWeight:'800',marginLeft:15, marginBottom:10}}>PEDIDOS</Text>
        <Divider bold style={{backgroundColor:'#04acb4', width:'90%' ,alignSelf:'center'}}/>
       <DataTable style={{marginTop:20}}>
        <DataTable.Header>
            <DataTable.Title style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:20}}>Id</Text>
            </DataTable.Title >
            <DataTable.Title style={{ flex: 2, alignItems:'center', justifyContent:'center'}} numeric>
                <Text style={{color:'white',fontSize:20}}>Fecha</Text>
            </DataTable.Title>
            <DataTable.Title style={{ flex: 2, alignItems:'center', justifyContent:'center'}} numeric>
                <Text style={{color:'white',fontSize:20}}>Monto</Text>
            </DataTable.Title>
            <DataTable.Title style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:20}}>Ver</Text>
            </DataTable.Title >
        </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.id}>
            <DataTable.Cell style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'white',fontSize:16}}>{item.id}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 2, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:16}}>{item.fecha}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 2, alignItems:'center', justifyContent:'center'}}>
                <Text style={{color:'white',fontSize:16}}>${item.monto}</Text>
            </DataTable.Cell>
            <DataTable.Cell style={{ flex: 1, alignItems:'center', justifyContent:'center'}}>
            <IconButton
                icon="eye"
                iconColor={'#04acb4'}
                size={20}
                onPress={() => navigation.navigate('VerOrden',{id:item.id,orden:item.orden, total:item.monto})}
            />
            </DataTable.Cell>
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={
            <Text style={{ color: 'white' }}>{`${from + 1}-${to} of ${items.length}`}</Text>
          }
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={
            <Text style={{ color: 'white' }}>Cantidad de pedidos</Text>
          }
      />
    </DataTable>
        <IconButton
            icon="plus"
            iconColor={'#3c3c44'}
            style={{position:'absolute',right:10, bottom:10, backgroundColor:'#04acb4'}}
            mode='contained'
            size={40}
            onPress={() => navigation.navigate('NuevaOrden')}
        />
    </View>
  )
}