import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';

// Aula Anterior: Utilizar a parte de criação do TypeORM

// interface CreateAppointmentDTO {
//     provider: string;
//     date: Date;
// }
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
    // #Aula Anterior
    // TypeORM já foi método de buscar todos e não iremos mais salvar em []
    // private appointments: Appointment[];

    // constructor() {
    //     this.appointments = [];
    // }

    // public all(): Appointment[] {
    //     return this.appointments;
    // }

    public async findByDate(date: Date): Promise<Appointment | null> {
        // const findAppointment = this.appointments.find(appointment =>
        //     isEqual(date, appointment.date),
        // );

        const findAppointment = await this.findOne({
            where: { date },
        });

        return findAppointment || null;
    }

    // #Aula Anterior
    // TypeORM já possuí um metódo de create
    // public create({ provider, date }: CreateAppointmentDTO): Appointment {
    //     const appointment = new Appointment({ provider, date });

    //     this.appointments.push(appointment);

    //     return appointment;
    // }
}

export default AppointmentsRepository;
