import React, {useState} from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
//import { AlphabetList } from "react-native-section-alphabet-list"

const Invoice = ({navigation}) => {
    const data = [
        { value: 'Wallis and Futuna', key: 'WF' },
        { value: 'Western Sahara', key: 'EH' },
        { value: 'Yemen', key: 'YE' },
        { value: 'Zambia', key: 'ZM' },
        { value: 'Zimbabwe', key: 'ZW' },
        { value: 'Bahrain', key: 'BH' },
        { value: 'Bangladesh', key: 'BD' },
        { value: 'Barbados', key: 'BB' },
        { value: 'Belarus', key: 'BY' },
        { value: 'Belgium', key: 'BE' },
        { value: 'Belize', key: 'BZ' },
        { value: 'Benin', key: 'BJ' },
        { value: 'Bahamas', key: 'BS' },
        { value: 'Afghanistan', key: 'AF' },
        { value: 'Åland Islands', key: 'AX' },
        { value: 'Albania', key: 'AL' },
        { value: 'Algeria', key: 'DZ' },
        { value: 'American Samoa', key: 'AS' },
        { value: 'AndorrA', key: 'AD' },
        { value: 'Angola', key: 'AO' },
        { value: 'Anguilla', key: 'AI' },
        { value: 'Antarctica', key: 'AQ' },
        { value: 'Antigua and Barbuda', key: 'AG' },
        { value: 'Argentina', key: 'AR' },
        { value: 'Armenia', key: 'AM' },
        { value: 'Aruba', key: 'AW' },
        { value: 'Australia', key: 'AU' },
        { value: 'Austria', key: 'AT' },
        { value: 'Azerbaijan', key: 'AZ' },
        
        
        { value: 'Bermuda', key: 'BM' },
        { value: 'Bhutan', key: 'BT' },
        { value: 'Bolivia', key: 'BO' },
        { value: 'Bosnia and Herzegovina', key: 'BA' },
        { value: 'Botswana', key: 'BW' },
        { value: 'Bouvet Island', key: 'BV' },
        { value: 'Brazil', key: 'BR' },
        { value: 'British Indian Ocean Territory', key: 'IO' },
        { value: 'Brunei Darussalam', key: 'BN' },
        { value: 'Bulgaria', key: 'BG' },
        { value: 'Burkina Faso', key: 'BF' },
        { value: 'Burundi', key: 'BI' },
        { value: 'Cambodia', key: 'KH' },
        { value: 'Cameroon', key: 'CM' },
        { value: 'Canada', key: 'CA' },
        { value: 'Cape Verde', key: 'CV' },
        { value: 'Cayman Islands', key: 'KY' },
        { value: 'Central African Republic', key: 'CF' },
        { value: 'Chad', key: 'TD' },
        { value: 'Chile', key: 'CL' },
        { value: 'China', key: 'CN' },
        { value: 'Christmas Island', key: 'CX' },
        { value: 'Cocos (Keeling) Islands', key: 'CC' },
        { value: 'Colombia', key: 'CO' },
        { value: 'Comoros', key: 'KM' },
        { value: 'Congo', key: 'CG' },
        { value: 'Congo, The Democratic Republic of the', key: 'CD' },
        { value: 'Cook Islands', key: 'CK' },
        { value: 'Costa Rica', key: 'CR' },
        { value: "Cote D'Ivoire", key: 'CI' },
        { value: 'Croatia', key: 'HR' },
        { value: 'Cuba', key: 'CU' },
        { value: 'Cyprus', key: 'CY' },
        { value: 'Czech Republic', key: 'CZ' },
        { value: 'Denmark', key: 'DK' },
        { value: 'Djibouti', key: 'DJ' },
        { value: 'Dominica', key: 'DM' },
        { value: 'Dominican Republic', key: 'DO' },
        { value: 'Ecuador', key: 'EC' },
        { value: 'Egypt', key: 'EG' },
        { value: 'El Salvador', key: 'SV' },
        { value: 'Equatorial Guinea', key: 'GQ' },
        { value: 'Eritrea', key: 'ER' },
        { value: 'Estonia', key: 'EE' },
        { value: 'Ethiopia', key: 'ET' },
        { value: 'Falkland Islands (Malvinas)', key: 'FK' },
        { value: 'Faroe Islands', key: 'FO' },
        { value: 'Fiji', key: 'FJ' },
        { value: 'Finland', key: 'FI' },
        { value: 'France', key: 'FR' },
        { value: 'French Guiana', key: 'GF' },
        { value: 'French Polynesia', key: 'PF' },
        { value: 'French Southern Territories', key: 'TF' },
        { value: 'Gabon', key: 'GA' },
        { value: 'Gambia', key: 'GM' },
        { value: 'Georgia', key: 'GE' },
        { value: 'Germany', key: 'DE' },
        { value: 'Ghana', key: 'GH' },
        { value: 'Gibraltar', key: 'GI' },
        { value: 'Greece', key: 'GR' },
        { value: 'Greenland', key: 'GL' },
        { value: 'Grenada', key: 'GD' },
        { value: 'Guadeloupe', key: 'GP' },
        { value: 'Guam', key: 'GU' },
        { value: 'Guatemala', key: 'GT' },
        { value: 'Guernsey', key: 'GG' },
        { value: 'Guinea', key: 'GN' },
        { value: 'Guinea-Bissau', key: 'GW' },
        { value: 'Guyana', key: 'GY' },
        { value: 'Haiti', key: 'HT' },
        { value: 'Heard Island and Mcdonald Islands', key: 'HM' },
        { value: 'Holy See (Vatican City State)', key: 'VA' },
        { value: 'Honduras', key: 'HN' },
        { value: 'Hong Kong', key: 'HK' },
        { value: 'Hungary', key: 'HU' },
        { value: 'Iceland', key: 'IS' },
        { value: 'India', key: 'IN' },
        { value: 'Indonesia', key: 'ID' },
        { value: 'Iran, Islamic Republic Of', key: 'IR' },
        { value: 'Iraq', key: 'IQ' },
        { value: 'Ireland', key: 'IE' },
        { value: 'Isle of Man', key: 'IM' },
        { value: 'Israel', key: 'IL' },
        { value: 'Italy', key: 'IT' },
        { value: 'Jamaica', key: 'JM' },
        { value: 'Japan', key: 'JP' },
        { value: 'Jersey', key: 'JE' },
        { value: 'Jordan', key: 'JO' },
        { value: 'Kazakhstan', key: 'KZ' },
        { value: 'Kenya', key: 'KE' },
        { value: 'Kiribati', key: 'KI' },
        { value: "Korea, Democratic People'S Republic of", key: 'KP' },
        { value: 'Korea, Republic of', key: 'KR' },
        { value: 'Kuwait', key: 'KW' },
        { value: 'Kyrgyzstan', key: 'KG' },
        { value: "Lao People'S Democratic Republic", key: 'LA' },
        { value: 'Latvia', key: 'LV' },
        { value: 'Lebanon', key: 'LB' },
        { value: 'Lesotho', key: 'LS' },
        { value: 'Liberia', key: 'LR' },
        { value: 'Libyan Arab Jamahiriya', key: 'LY' },
        { value: 'Liechtenstein', key: 'LI' },
        { value: 'Lithuania', key: 'LT' },
        { value: 'Luxembourg', key: 'LU' },
        { value: 'Macao', key: 'MO' },
        { value: 'Macedonia, The Former Yugoslav Republic of', key: 'MK' },
        { value: 'Madagascar', key: 'MG' },
        { value: 'Malawi', key: 'MW' },
        { value: 'Malaysia', key: 'MY' },
        { value: 'Maldives', key: 'MV' },
        { value: 'Mali', key: 'ML' },
        { value: 'Malta', key: 'MT' },
        { value: 'Marshall Islands', key: 'MH' },
        { value: 'Martinique', key: 'MQ' },
        { value: 'Mauritania', key: 'MR' },
        { value: 'Mauritius', key: 'MU' },
        { value: 'Mayotte', key: 'YT' },
        { value: 'Mexico', key: 'MX' },
        { value: 'Micronesia, Federated States of', key: 'FM' },
        { value: 'Moldova, Republic of', key: 'MD' },
        { value: 'Monaco', key: 'MC' },
        { value: 'Mongolia', key: 'MN' },
        { value: 'Montserrat', key: 'MS' },
        { value: 'Morocco', key: 'MA' },
        { value: 'Mozambique', key: 'MZ' },
        { value: 'Myanmar', key: 'MM' },
        { value: 'Namibia', key: 'NA' },
        { value: 'Nauru', key: 'NR' },
        { value: 'Nepal', key: 'NP' },
        { value: 'Netherlands', key: 'NL' },
        { value: 'Netherlands Antilles', key: 'AN' },
        { value: 'New Caledonia', key: 'NC' },
        { value: 'New Zealand', key: 'NZ' },
        { value: 'Nicaragua', key: 'NI' },
        { value: 'Niger', key: 'NE' },
        { value: 'Nigeria', key: 'NG' },
        { value: 'Niue', key: 'NU' },
        { value: 'Norfolk Island', key: 'NF' },
        { value: 'Northern Mariana Islands', key: 'MP' },
        { value: 'Norway', key: 'NO' },
        { value: 'Oman', key: 'OM' },
        { value: 'Pakistan', key: 'PK' },
        { value: 'Palau', key: 'PW' },
        { value: 'Palestinian Territory, Occupied', key: 'PS' },
        { value: 'Panama', key: 'PA' },
        { value: 'Papua New Guinea', key: 'PG' },
        { value: 'Paraguay', key: 'PY' },
        { value: 'Peru', key: 'PE' },
        { value: 'Philippines', key: 'PH' },
        { value: 'Pitcairn', key: 'PN' },
        { value: 'Poland', key: 'PL' },
        { value: 'Portugal', key: 'PT' },
        { value: 'Puerto Rico', key: 'PR' },
        { value: 'Qatar', key: 'QA' },
        { value: 'Reunion', key: 'RE' },
        { value: 'Romania', key: 'RO' },
        { value: 'Russian Federation', key: 'RU' },
        { value: 'RWANDA', key: 'RW' },
        { value: 'Saint Helena', key: 'SH' },
        { value: 'Saint Kitts and Nevis', key: 'KN' },
        { value: 'Saint Lucia', key: 'LC' },
        { value: 'Saint Pierre and Miquelon', key: 'PM' },
        { value: 'Saint Vincent and the Grenadines', key: 'VC' },
        { value: 'Samoa', key: 'WS' },
        { value: 'San Marino', key: 'SM' },
        { value: 'Sao Tome and Principe', key: 'ST' },
        { value: 'Saudi Arabia', key: 'SA' },
        { value: 'Senegal', key: 'SN' },
        { value: 'Serbia and Montenegro', key: 'CS' },
        { value: 'Seychelles', key: 'SC' },
        { value: 'Sierra Leone', key: 'SL' },
        { value: 'Singapore', key: 'SG' },
        { value: 'Slovakia', key: 'SK' },
        { value: 'Slovenia', key: 'SI' },
        { value: 'Solomon Islands', key: 'SB' },
        { value: 'Somalia', key: 'SO' },
        { value: 'South Africa', key: 'ZA' },
        { value: 'South Georgia and the South Sandwich Islands', key: 'GS' },
        { value: 'Spain', key: 'ES' },
        { value: 'Sri Lanka', key: 'LK' },
        { value: 'Sudan', key: 'SD' },
        { value: 'Surivalue', key: 'SR' },
        { value: 'Svalbard and Jan Mayen', key: 'SJ' },
        { value: 'Swaziland', key: 'SZ' },
        { value: 'Sweden', key: 'SE' },
        { value: 'Switzerland', key: 'CH' },
        { value: 'Syrian Arab Republic', key: 'SY' },
        { value: 'Taiwan, Province of China', key: 'TW' },
        { value: 'Tajikistan', key: 'TJ' },
        { value: 'Tanzania, United Republic of', key: 'TZ' },
        { value: 'Thailand', key: 'TH' },
        { value: 'Timor-Leste', key: 'TL' },
        { value: 'Togo', key: 'TG' },
        { value: 'Tokelau', key: 'TK' },
        { value: 'Tonga', key: 'TO' },
        { value: 'Trinidad and Tobago', key: 'TT' },
        { value: 'Tunisia', key: 'TN' },
        { value: 'Turkey', key: 'TR' },
        { value: 'Turkmenistan', key: 'TM' },
        { value: 'Turks and Caicos Islands', key: 'TC' },
        { value: 'Tuvalu', key: 'TV' },
        { value: 'Uganda', key: 'UG' },
        { value: 'Ukraine', key: 'UA' },
        { value: 'United Arab Emirates', key: 'AE' },
        { value: 'United Kingdom', key: 'GB' },
        { value: 'United States', key: 'US' },
        { value: 'United States Minor Outlying Islands', key: 'UM' },
        { value: 'Uruguay', key: 'UY' },
        { value: 'Uzbekistan', key: 'UZ' },
        { value: 'Vanuatu', key: 'VU' },
        { value: 'Venezuela', key: 'VE' },
        { value: 'Viet Nam', key: 'VN' },
        { value: 'Virgin Islands, British', key: 'VG' },
        { value: 'Virgin Islands, U.S.', key: 'VI' },
        
      ]

    const [search, setSearch] = useState({
        text: '',
        isLoading: false,
      })

    const {text, isLoading} = search

    const onChange = name => text => setSearch({...formData, [name]: text}) 

    const renderListItem = ({item, index}) => {
        return (
            <View style={{
                flexDirection: 'row', 
                alignItems: 'center',
                borderTopWidth: index === 0 ? 0 : 1,
                borderTopColor: '#EFEFEF',
                paddingVertical: 18,
                width: '92%'
            }}>
                <View
                style={{
                    width: 48,
                    height: 48,
                    backgroundColor: '#C4C4C4',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 24,
                    marginRight: 12,
                }} 
                />
                <View style={{width: '80%'}}>
                    <Text style={{fontSize: 16, fontFamily: 'Helvetica-Bold', color: "#000"}}>{item.value}</Text>
                    <Text style={{fontSize: 12, fontFamily: 'Helvetica', color: "#A0A0A0", marginTop: 3}}>IBM</Text>
                </View>
            </View>
        )
      }
    
      renderSectionHeader = () => {
        return (
            <View />
        )
      }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{
            paddingHorizontal: 24,
            marginTop: 30,
            marginBottom: 10,
            }}>
                <Text style={{fontSize: 24, fontFamily: 'Helvetica-Bold', color: "#000"}}>Invoice</Text>
                <View>
                    <TextInput
                    style={{
                        //height: 54,
                        padding: 15,
                        borderRadius: 5,
                        backgroundColor: '#fff',
                        fontSize: 16,
                        marginTop: 21
                        }}
                    selectionColor="#000"
                    value={text}
                    onChangeText={onChange('text')}
                    placeholder="Search"
                    />
                </View>
                <Text style={{fontSize: 14, fontFamily: 'Helvetica', color: "#000", marginTop: 17}}>24 Client records found</Text>
            </View>
            <FlatList
              data={data.sort((a, b) =>  a.value > b.value && 1 || -1 )}
              keyExtractor={(_, index) => index.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: 24, paddingTop: 20, paddingBottom: 30}}
              renderItem={renderListItem}
              />
            <TouchableOpacity 
            onPress={() => navigation.navigate('NewInvoice')}
            style={{
                position: 'absolute',
                bottom: 25,
                right: 15,
                zIndex: 2,
                backgroundColor: '#000' ,
                borderWidth: 1,
                borderRadius: 9,
                width: 56,
                height: 56,
                alignItems: 'center',
                justifyContent: 'center',
            }}
            activeOpacity={0.9}
            >
                <Image 
                source={require('../../assets/img/icons/plus-white.png')} 
                resizeMode="contain" 
                style={{width: 22, height: 23}} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Invoice
