import { Text } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import React, { useState } from 'react';
import { Flex } from './rebass/Flex';
import { Dimensions } from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import { v4 as uuidv4 } from 'uuid';
import { ChargePostResponse } from './openpixApi/chargePost';
import { useOpenPix } from '@openpix/react';
import { config } from './config';
import { useToast } from 'react-native-styled-toast'

const windowWidth = Dimensions.get('window').width;

const OpenPixDemo = () => {
  const [correlationID, setCorrelationID] = useState<string>(uuidv4().toString());
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [charge, setCharge] = useState<ChargePostResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { toast } = useToast()

  const reset = () => {
    setCorrelationID(uuidv4().toString());
    setCharge(null);
    setError(null);
  }

  // eslint-disable-next-line
  const onPay = (charge) => {
    toast({ message: 'Thank you for your Donation!', });

    reset();
  };

  const { chargeCreate } = useOpenPix({
    appID: config.APP_ID,
    onPay,
  })

  const createDonation = async () => {
    setIsLoading(true);

    const payload = {
      correlationID,
      value: 1, // one cent
      comment: 'Donate',
    }
    try {
      const { charge, error } = await chargeCreate(payload);

      setIsLoading(false);

      if (error) {
        setError(error);
        return;
      }

      setCharge(charge);
    } catch (err) {
      setIsLoading(false);
      setError(error);
    }
  }

  console.log({
    charge,
  });

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <Text>Gerando seu QRCode Pix para a Doação</Text>
          <ActivityIndicator />
        </>
      )
    }

    if (error) {
      return (
        <>
          <Text>Erro ao geracao Doação</Text>
          <Text>{error.toString()}</Text>
        </>
      )
    }

    if (charge) {
      return (
        <>
          <QRCode
            value={charge.brCode}
            size={windowWidth - 20}
          />
          <Text mt='10px' mb='10px'>Status: {charge.status}</Text>
        </>
      )
    }

    return (
      <>
        <Button mode="contained" onPress={createDonation}>
          Doar
        </Button>
      </>
    )
  }

  return (
    <Flex flex={1} alignItems='center' justifyContent='center' bgColor='#fff'>
      <Text mb='10px'>OpenPix Demo</Text>
      {renderContent()}
    </Flex>
  )
};

export default OpenPixDemo;
