import { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import {formatDate} from "@fullcalendar/core"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import listPlugin from "@fullcalendar/list"
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material"

import { Header } from "../../../components/Header"
import { tokens } from "../../../theme"
import { Home } from "../../../components/HomeLayoutComponents/Home"

export const Calendar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const[currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Adicione um título para o evento");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if(title){
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay

            })
        }
        
    }

    const handleEventClick = (selected) => {
        if(window.confirm(`Você tem certeza que deseja remover o evento ${selected.event.title}`)){
            selected.event.remove();
        }
    }
 
    return(
        <Home>
            <Box m="20px">
                <Header title="CALENDÁRIO" subtitle="Calendário completo para registro de eventos"/>
                <Box display="flex" justifyContent="space-between">
                    <Box 
                     flex="1 1 20%" 
                     backgroundColor={colors.primary[100]}
                     p="15px"
                     borderRadius="4px">
                        <Typography variant="h5">Eventos</Typography>
                        <List>
                            {currentEvents.map((event) => (
                                <ListItem
                                key={event.id}
                                sx={{ backgroundColor: colors.yellowAccent[300], 
                                      margin: "10px 0", 
                                      borderRadius: "2px"}}>
                                    <ListItemText
                                     primary={event.title}
                                     secondary={
                                        <Typography>{formatDate(event.start, {
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric"
                                        })}
                                        </Typography>}>
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                     </Box>
                     <Box flex="1 1 100%" ml="15px">
                        <FullCalendar
                         height="75vh"
                         plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin
                         ]}
                         headerToolbar={{
                            left: "prev,next today",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
                         }}
                         initialView="dayGridMonth"
                         editable={true}
                         selectable={true}
                         selectMirror={true}
                         dayMaxEvents={true}
                         select={handleDateClick}
                         eventClick={handleEventClick}
                         eventsSet={(events) => setCurrentEvents(events)}
                         eventDidMount={(info) => {
                            
                           const trEventTable = info.el.previousElementSibling;

                           if(trEventTable != null){
                              const divEventChild = trEventTable.children[0].children[0];
                              divEventChild.style.backgroundColor = "#998100";
                           }
                           
                         }}
                         initialEvents={[
                            {id: "1234", title: "Evento durante o dia inteiro", date: "2023-06-14"},
                            {id: "1235", title: "Evento Cronometrado", date: "2023-06-22"}

                         ]}
                         
                        />
                     </Box>
                </Box>
            </Box>
        </Home>
    );

}