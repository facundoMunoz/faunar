public class Paciente implements Runnable {

    private int id;
    private int cantEstudios;

    public Paciente(int idPaciente) {
        id = idPaciente;
        cantEstudios = (int) (Math.random() * 10);
    }

    @Override
    public void run() {
        for (int nroEstudio = 1; nroEstudio <= cantEstudios; nroEstudio++) {
            System.out.println("Paciente " + id + " hace estudio " + nroEstudio);
        }
    }

}
