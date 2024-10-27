import Layout from '../components/layouts/Article'
import {
  Box,
  Button,
  Container,
  Image,
  SimpleGrid,
  Text,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  VStack,
} from '@chakra-ui/react'
/* import { useTranslation } from 'next-i18next' */
import React, { useState } from 'react'
import { CheckIcon } from '@chakra-ui/icons'
import Calendar from '../components/Calendar';
import ClientForm from '../components/ClientForm'

const serviceCategories = [
  {
    title: 'Arbeitsmedizinische Vorsorge/ (ehemals G-Untersuchungen)',
    services: [
      {
        id: 'g20',
        title: 'G 20',
        description: 'Tätigkeit mit Lärmexposition'
      },
      {
        id: 'g24',
        title: 'G 24',
        description:
          'Feuchtarbeit/ Vorsorge für Tätigkeiten mit Hautgefährdungen (mit Ausnahme von Hautkrebs)'
      },
      {
        id: 'g26-1',
        title: 'G 26.1',
        description: 'Tragen von Atemschutzgeräten Gruppe 1'
      },
      {
        id: 'g26-2',
        title: 'G 26.2',
        description: 'Tragen von Atemschutzgeräten Gruppe 2'
      },
      {
        id: 'g26-3',
        title: 'G 26.3',
        description: 'Tragen von Atemschutzgeräten Gruppe 3'
      },
      {
        id: 'g35',
        title: 'G 35',
        description:
          'Arbeitsaufenthalt im Ausland unter be-sonderen klimatischen oder gesundheit-lichen Belastungen'
      },
      {
        id: 'g37',
        title: 'G 37',
        description:
          'Tätigkeiten an Bildschirmgeräten inkl. Sehtest, Augeninnendruckmessung, Re-fraktionsbestimmung и Ergonomieberatung'
      },
      {
        id: 'g38',
        title: 'G 38',
        description: 'Tätigkeit mit Nickel / -verbindungen'
      },
      {
        id: 'g42-g',
        title: 'G 42 (G)',
        description:
          'Tätigkeiten mit Infektionsgefährdung/ Personal im Gesundheitswesen: z.B. Tä-tigkeit in Praxis / Klinik / Pflege / ambu-lanter Pflege / Rettungsdienst etc.'
      },
      {
        id: 'g42-k',
        title: 'G 42 (K)',
        description:
          'Tätigkeiten mit Infektionsgefährdung in der Kinderbetreuung'
      },
      {
        id: 'g46',
        title: 'G 46',
        description: 'Tätigkeiten mit Belastungen des Bewegungsapparates'
      },
      {
        id: 'uv-strahlung',
        title: 'UV-Strahlung',
        description:
          'Tätigkeiten im Freien mit intensiver Be-lastung durch natürliche UV-Strahlung'
      },
      {
        id: 'g42-fsme',
        title: 'G42 (FSME)',
        description:
          'Tätigkeiten auf Freiflächen, Wälder, Parks, Gartenanlagen, Tiergärten, Zoos, Tätigkeiten in niederer Vegetation oder direkter Kontakt zu frei lebenden Tieren'
      }
    ]
  },
  {
    title: 'Eignungs-/ und Einstellungsuntersuchungen',
    services: [
      {
        id: 'g26-3',
        title: 'G 26.3',
        description:
          'Schwerer Atemschutz / Untersuchung nach Feuerwehrdienstvorschrift'
      },
      {
        id: 'g41-1',
        title: 'G 41',
        description: 'Arbeiten mit Absturzgefahr (Alter <40 Jahre)'
      },
      {
        id: 'g41-2',
        title: 'G 41',
        description: 'Arbeiten mit Absturzgefahr (ab 40 Jahre/ mit Ergometrie)'
      },
      {
        id: 'g25e',
        title: 'G 25e',
        description: 'Arbeiten unter Spannung'
      },
      {
        id: 'g25-1',
        title: 'G25 (mit Perimetrie)',
        description:
          'Fahr-, Steuer- und Überwachungstätig-keit: Gabelstapler, Hebebühne, Kran'
      },
      {
        id: 'g25-2',
        title: 'G25 (ohne Perimetrie)',
        description:
          'Fahr-, Steuer- und Überwachungstätig-keit: PKW, Flurförderzeuge ohne Hubein-richtung, Mitgänger-Flurförderzeuge'
      },
      {
        id: 'einstellungsuntersuchung',
        title: 'Einstellungsuntersuchung',
        description:
          'Inhalte der Einstellungsuntersuchung nach Vorgabe des einstellenden Unternehmens'
      }
    ]
  },
  {
    title:
      'Impfungen/ Reisemedizin/Sprechstunden/ Belehrung und sonstige Leistungen',
    services: [
      {
        id: 'muschg',
        title: 'MuSchG',
        description: 'Sprechstunde nach Mutterschutzgesetz'
      },
      {
        id: 'arbeitsmedizinische-sprechstunde',
        title: 'arbeitsmedizinische Sprechstunde',
        description:
          'Sprechstunde für Mitarbeiter/Innen von Firmen, die durch die CompanyMedics GmbH betreut werden'
      },
      {
        id: 'grippeschutzimpfung',
        title: 'Grippeschutzimpfung',
        description: ''
      },
      {
        id: 'impfung',
        title: 'Impfung',
        description:
          'Impfung bzw. Folgeimpfung im Rahmen der arbeitsmedizinischen Vorsorge/ Bitte hier keine Grippeimpfungen buchen -> direkt unter Grippeschutzimpfung buchbar.'
      },
      {
        id: 'titerbestimmung-nach-impfung',
        title: 'Titerbestimmung nach Impfung',
        description:
          'Bestimmung der Immunität nach Imp-fung im Rahmen der arbeitsmedizini-schen Vorsorge'
      },
      {
        id: 'belehrung-nach-§43-ifsg',
        title: 'Belehrung nach §43, IFSG',
        description:
          'Belehrung nach §43 Infektionsschutzge-setz (Umgang mit Lebensmitteln)'
      }
    ]
  },
  {
    title: 'Technische Untersuchungsleistungen',
    services: [
      {
        id: 'labor',
        title: 'Labor',
        description: 'Blutentnahme'
      },
      {
        id: 'audiometrie',
        title: 'Audiometrie',
        description: 'Hörtest'
      },
      {
        id: 'visiometrie',
        title: 'Visiometrie',
        description: 'Sehtest'
      },
      {
        id: 'perimetrie',
        title: 'Perimetrie',
        description: 'Gesichtsfelduntersuchung'
      },
      {
        id: 'ekg',
        title: 'EKG',
        description: 'Ruhe-EKG'
      },
      {
        id: 'ergometrie',
        title: 'Ergometrie',
        description: 'Belastung-EKG'
      },
      {
        id: 'lungenfunktion',
        title: 'Lungenfunktion',
        description: 'Lungenfunktion'
      },
      {
        id: 'drogenscreening',
        title: 'Drogenscreening',
        description: 'Drogenscreening im Urin'
      },
      {
        id: 'biometrie',
        title: 'Biometrie',
        description: 'RR, Puls, Größe, Gewicht'
      }
    ]
  }
]

const Terminvereinbarung = () => {
  /* const { t } = useTranslation('common') */
  const [currentStep, setCurrentStep] = useState(1)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [clientData, setClientData] = useState({})
  const [selectedServices, setSelectedServices] = useState([])
  const [showExaminationType, setShowExaminationType] = useState(false)
  const [examinationType, setExaminationType] = useState(null)

  const handleAccordionChange = index => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleServiceSelection = (service) => {
    setSelectedServices(prevServices => {
      const newServices = prevServices.some(s => s.id === service.id)
        ? prevServices.filter(s => s.id !== service.id)
        : [...prevServices, service];
      
      const shouldShowExaminationType = newServices.some(s => 
        serviceCategories[0].services.some(item => item.id === s.id) ||
        serviceCategories[1].services.some(item => item.id === s.id)
      );
      setShowExaminationType(shouldShowExaminationType);
      
      if (!shouldShowExaminationType) {
        setExaminationType(null);
      }
      
      return newServices;
    });
  };
  
  const handleExaminationTypeSelection = (type) => {
    setExaminationType(type);
  };

  const handleDateTimeSelect = (date, time) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    const bookingData = {
      services: selectedServices,
      examinationType,
      date: selectedDate.toISOString(),
      time: selectedTime,
      clientData
    };

    try {
      const response = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        // Показать сообщение об успешном бронировании
        alert('Бронирование успешно завершено!');
      } else {
        // Показать сообщение об ошибке
        alert('Ошибка при бронировании. Пожалуйста, попробуйте еще раз.');
      }
    } catch (error) {
      console.error('Ошибка при бронировании:', error);
      alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Box width={{ base: '100%', lg: '70%' }} bg="white" p={6} borderRadius="xl" boxShadow="xl">
            <Accordion allowToggle index={expandedIndex} onChange={handleAccordionChange}>
            {serviceCategories.map((category, index) => (
                  <AccordionItem
                    key={index}
                    borderWidth={expandedIndex === index ? '0' : '1px'}
                    borderColor="gray.200"
                    borderRadius="md"
                    mb={6}
                    transition="all 0.3s"
                    _expanded={{ bg: 'teal.50', boxShadow: 'md' }}
                  >
                    <AccordionButton
                      py={4}
                      _hover={{ bg: 'teal.50' }}
                      borderRadius="md"
                      transition="all 0.3s"
                    >
                      <Box
                        flex="1"
                        textAlign="left"
                        fontSize="xl"
                        fontWeight="semibold"
                        color="teal.700"
                      >
                        {category.title}
                      </Box>
                      <AccordionIcon color="teal.500" />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                        {category.services.map(subItem => (
                          <Box
                            key={subItem.id}
                            p={4}
                            borderRadius="lg"
                            boxShadow="md"
                            bg="white"
                            transition="all 0.3s"
                            _hover={{
                              transform: 'translateY(-5px)',
                              boxShadow: 'lg'
                            }}
                            onClick={() => handleServiceSelection(subItem)}
                            cursor="pointer"
                            borderColor={
                              selectedServices.some(s => s.id === subItem.id)
                                ? 'teal.200'
                                : 'gray.200'
                            }
                            borderWidth={2}
                            position="relative"
                          >
                            {selectedServices.some(
                              s => s.id === subItem.id
                            ) && (
                              <Flex
                                position="absolute"
                                top="-10px"
                                right="-10px"
                                width="24px"
                                height="24px"
                                borderRadius="full"
                                bg="teal.400"
                                justifyContent="center"
                                alignItems="center"
                              >
                                <CheckIcon color="white" fontSize="12px" />
                              </Flex>
                            )}
                            <Text
                              fontWeight="bold"
                              fontSize="lg"
                              mb={2}
                              color="teal.600"
                            >
                              {subItem.title}
                            </Text>
                            <Text fontSize="md" color="gray.600">
                              {subItem.description}
                            </Text>
                          </Box>
                        ))}
                      </SimpleGrid>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
            </Accordion>
            {showExaminationType && (
              <Box mt={6}>
               <Text fontWeight="bold" mb={2}>Bitte auswählen:</Text>
                <SimpleGrid columns={2} spacing={4}>
                  <Box
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => handleExaminationTypeSelection('Erstuntersuchung')}
                    bg={examinationType === 'Erstuntersuchung' ? 'teal.100' : 'white'}
                    _hover={{ bg: 'teal.50' }}
                  >
                    Erstuntersuchung
                  </Box>
                  <Box
                    p={4}
                    borderWidth={1}
                    borderRadius="md"
                    cursor="pointer"
                    onClick={() => handleExaminationTypeSelection('Nachuntersuchung')}
                    bg={examinationType === 'Nachuntersuchung' ? 'teal.100' : 'white'}
                    _hover={{ bg: 'teal.50' }}
                  >
                    Nachuntersuchung
                  </Box>
                </SimpleGrid>
              </Box>
            )}
          </Box>
        );
      case 2:
        return (
          <Box width={{ base: '100%', lg: '70%' }} bg="white" p={6} borderRadius="xl" boxShadow="xl">
            <Text fontSize="2xl" mb={4}>Tag & Uhrzeit wählen</Text>
            <Calendar onDateTimeSelect={handleDateTimeSelect} />
          </Box>
        );
      case 3:
        return (
          <Box width={{ base: '100%', lg: '70%' }} bg="white" p={6} borderRadius="xl" boxShadow="xl">
            <Text fontSize="2xl" mb={4}>Persönliche Daten</Text>
            <ClientForm onSubmit={setClientData} />
          </Box>
        );
      default:
        return null;
    }
  };


  return (
    <Layout title="terminvereinbarung">
      <Container display="flex" flexDirection="column" maxW="full" w="full" px={0} mt={5}>
        <Image
          src="/images/praxis_head-daf80ec8.webp"
          alt="leistungen"
          h={{ base: '166.38px', md: '123.19px', lg: '248px', xl: '194px' }}
          objectFit="cover"
        />
        <Heading as="h1" size="2xl" position="absolute" mx="50px" mt="70px" color="white" textAlign="center">
          Online Terminvereinbarung
        </Heading>

        <Container py="70px" mx="auto" display="flex" flexDirection="column" maxW="container.xl" w="100%" px={4} mt={5} alignItems="center">
          <Text fontSize="md" py="15px" px="25px" textAlign="center" borderBottom="1px" borderColor="gray.200" mb={8}>
            Willkommen auf unserer Online-Terminbuchungsseite. In wenigen Schritten können Sie einen Termin bei uns online buchen. Wir freuen uns auf Sie!
          </Text>
          <Flex direction={{ base: 'column', lg: 'row' }} justify="center" align="flex-start" gap={8} w="100%" maxW="1000px">
            {renderStep()}

            <Box width={{ base: "100%", lg: "35%" }} mt={{ base: 8, lg: 0 }}>
              <Text as="h3" fontSize="xl" fontWeight="bold" mb={4}>
                Ihre Buchung
              </Text>
              <Box borderWidth={1} borderRadius="md" p={4}>
                <Flex alignItems="center" mb={2}>
                  <Flex alignItems="center" justifyContent="center" bg="teal.500" color="white" borderRadius="full" width="24px" height="24px" mr={3}>
                    <Text fontSize="sm" fontWeight="bold">
                      {currentStep}
                    </Text>
                  </Flex>
                  <Text fontSize="md" fontWeight="bold">
                    {currentStep === 1 ? 'Leistungen' : currentStep === 2 ? 'Termin' : 'Persönliche Daten'}
                  </Text>
                </Flex>
                <VStack align="stretch" spacing={2}>
                  {selectedServices.map((service) => (
                    <Text key={service.id} fontSize="sm">{service.title}</Text>
                  ))}
                  {examinationType && (
                    <Text fontSize="sm" fontWeight="bold" mt={2}>{examinationType}</Text>
                  )}
                  {selectedDate && selectedTime && (
                    <Text fontSize="sm">{`${selectedDate.toLocaleDateString()} um ${selectedTime}`}</Text>
                  )}
                  {currentStep === 3 && Object.keys(clientData).length > 0 && (
                    <Text fontSize="sm">{`${clientData.firstName} ${clientData.lastName}`}</Text>
                  )}
                </VStack>
              </Box>
            </Box>
          </Flex>
        </Container>

        <Flex justifyContent="space-between" mt={8} alignItems="center" px={4}>
          <Flex>
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <Box
                  bg={currentStep >= step ? "teal.500" : "gray.300"}
                  color="white"
                  borderRadius="full"
                  width="24px"
                  height="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mr={2}
                >
                  {step}
                </Box>
                <Text 
                fontWeight={currentStep === step ? "bold" : "normal"} 
                color={currentStep === step ? "teal.500" : "gray.500"}
                >
                  {step === 1 
                  ? 'Leistungen' 
                  : step === 2 
                  ? 'Termin wählen' 
                  : 'Daten eingeben'}
                </Text>
                {step < 3 && <Text mx={2} color="gray.400">&gt;</Text>}
              </React.Fragment>
            ))}
          </Flex>
          {currentStep > 1 && (
            <Button onClick={handlePrevStep} mr={2}>
              Zurück
            </Button>
          )}
          {currentStep < 3 ? (
            <Button
              colorScheme="teal"
              onClick={handleNextStep}
              isDisabled={
                (currentStep === 1 && (selectedServices.length === 0 || (showExaminationType && !examinationType))) ||
                (currentStep === 2 && (!selectedDate || !selectedTime))
              }
            >
              Weiter
            </Button>
          ) : (
            <Button
              colorScheme="teal"
              onClick={handleSubmit}
              isDisabled={Object.keys(clientData).length === 0}
            >
              Termin Buchen
            </Button>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

export default Terminvereinbarung
export { getServerSideProps } from '../pages/index'