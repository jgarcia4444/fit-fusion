import React from 'react';
import {Text} from 'react-native';

import { Styles } from '../../constants/Styles';

const HomeSectionText = ({content, customStyles}) => {

    const {homeSectionText} = Styles;

    return (
        <Text style={[homeSectionText, customStyles]}>{content}</Text>
    )
}

export default HomeSectionText