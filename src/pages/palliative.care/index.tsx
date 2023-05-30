import { useState } from "react";
import { IPFBody } from "../../layouts/IPFBody";
import TabContext from '@mui/lab/TabContext';
import { Box, Container, Tab, Typography } from "@mui/material";
import nursing from "../../assets/nursing.jpeg";
import nutrition from "../../assets/nutrition.jpeg";
import psicology from "../../assets/psicology.jpeg";
import palliativeMedicine from "../../assets/palliative-medicine.jpeg";
import { TabList, TabPanel } from "@mui/lab";
import { PalliativeMedicine } from "./palliative.medicine";
import { Nursing } from "./nursing";
import { Nutrition } from "./nutrition";
import { Psicology } from "./psicology";
import { Link } from "react-router-dom";

export const PalliativeCare = () => {
  const [headerImage, setHeaderImage] = useState<string>(nursing);
  const [tab, setTab] = useState<string>('1');

  return (
    <IPFBody image={headerImage}>
      <TabContext value={tab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#A900F3' }}>
          <TabList
            variant="scrollable"
            scrollButtons={false}
            textColor="inherit"
            sx={{
              '& .MuiTab-textColorInherit': {
                color: 'white',
              },
              '& .MuiTabs-indicator': {
                backgroundColor: 'white',
              },
              color: 'grey'
            }}
            onChange={(_: React.SyntheticEvent, newValue: string) => {
              switch (newValue) {
                case '1':
                  setHeaderImage(nursing);
                  break;
                case '2':
                  setHeaderImage(palliativeMedicine);
                  break;
                case '3':
                  setHeaderImage(psicology);
                  break;
                default:
                  setHeaderImage(nutrition);
                  break;
              }

              setTab(newValue);
            }}
          >
            <Tab sx={{ fontWeight: 'bold' }} label="Enfermagem" value="1" />
            <Tab sx={{ fontWeight: 'bold' }} label="Medicina Paliativa" value="2" />
            <Tab sx={{ fontWeight: 'bold' }} label="Nutrição" value="3" />
            <Tab sx={{ fontWeight: 'bold' }} label="Psicologia" value="4" />
          </TabList>
        </Box>
        <Container>
          <TabPanel value="1"><Nursing /></TabPanel>
          <TabPanel value="2"><PalliativeMedicine /></TabPanel>
          <TabPanel value="3"><Nutrition /></TabPanel>
          <TabPanel value="4"><Psicology /></TabPanel>
        </Container>
      </TabContext>

      <Container>
        <Typography marginTop={10}>
          Fontes:
        </Typography>

        <Link to='http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1516-08582011000200007' target="_blank" rel="noopener noreferrer">
          <Typography variant="subtitle2" fontWeight={300} color='blue'>
            http://pepsic.bvsalud.org/scielo.php?script=sci_arttext&pid=S1516-08582011000200007
          </Typography>
        </Link>

        <Link to='https://nutritotal.com.br/pro/cuidados-paliativos-qual-o-papel-da-nutricao/amp/' target="_blank" rel="noopener noreferrer">
          <Typography variant="subtitle2" fontWeight={300} color='blue'>
            https://nutritotal.com.br/pro/cuidados-paliativos-qual-o-papel-da-nutricao/amp/
          </Typography>
        </Link>

        <Link to='https://paliativo.org.br/cuidados-paliativos/o-que-sao#' target="_blank" rel="noopener noreferrer">
          <Typography variant="subtitle2" fontWeight={300} color='blue'>
            https://paliativo.org.br/cuidados-paliativos/o-que-sao#
          </Typography>
        </Link>

        <Link to='https://blog.unis.edu.br/conheca-o-papel-da-enfermagem-nos-cuidados-paliativos?hs_amp=true' target="_blank" rel="noopener noreferrer">
          <Typography variant="subtitle2" fontWeight={300} color='blue' marginBottom={8}>
            https://blog.unis.edu.br/conheca-o-papel-da-enfermagem-nos-cuidados-paliativos?hs_amp=true
          </Typography>
        </Link>
      </Container>
    </IPFBody>
  );
};
