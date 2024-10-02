import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Image from 'next/image'

const LogoBox = styled.span`
    font-weight: bold;
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 10px;
    padding-top: 10px;
`;

const CrossIconStyle = styled(Image)`
    transition: 200ms ease;

    &:hover {
        transform: rotate(-20deg);
    }
`;

const MedicsIconStyle = styled(Image)`
    position: absolute;
    bottom: 0;
    margin-left: 47px;
    width: 105px; // Здесь можно регулировать ширину медиков
    height: auto;
`;

const Logo = () => {
  const crossIcon = "/images/cross.png";
  const medicsIcon = "/images/medics.png";

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        {/* Первая картинка (с крестом) */}
        <CrossIconStyle
          src={crossIcon}
          alt="cross logo icon"
          width={40}
          height={40}
        />
        {/* Текст */}
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontStyle="normal"
          fontWeight="500"
          fontSize="25px"
          letterSpacing="0.05em"
          ml={2}
          mt={-25} // Немного поднимем текст, чтобы он был выше первой картинки
          position="relative"
        >
          COMPANY
        </Text>
        {/* Вторая картинка (с медиками) */}
        <MedicsIconStyle
          src={medicsIcon}
          alt="medics logo icon"
          width={120} // Регулируем ширину
          height={60} // И высоту
        />
      </LogoBox>
    </Link>
  )
}

export default Logo;