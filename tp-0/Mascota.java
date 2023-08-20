import javax.swing.*;
import java.awt.*;
import java.util.concurrent.Semaphore;

public class Mascota extends JPanel {

    private String nombreMascota;
    private Estado estado;
    // GUI
    private int WIDTH = 550;
    private int HEIGHT = 750;
    private JPanel panel = new JPanel(null);
    private JLabel labelNombre = new JLabel(nombreMascota, SwingConstants.CENTER);
    private JLabel labelMensaje = new JLabel("", SwingConstants.CENTER);
    private JLabel labelImagen = new JLabel("", SwingConstants.CENTER);
    // Semaforos
    private Semaphore cambiarImagen = new Semaphore(1);
    // Botones
    private JButton botonAlimentar = new JButton("Alimentar");
    private JButton botonJugar = new JButton("Jugar");
    private JButton botonDormir = new JButton("Dormir");
    private JButton botonEstado = new JButton("Estado");
    // Animaciones
    private Thread movimientoNormal;
    private int idle = 0;
    private int sleep = 0;
    private int play = 0;
    private int eat = 0;

    public Mascota() {
        JFrame frame = new JFrame("Mascota Virtual");

        // Valores iniciales
        estado = new Aburrido(this);
        panel.setBackground(new Color(192, 185, 169));

        // Nombre
        labelNombre.setFont(new Font(labelNombre.getFont().getName(), Font.PLAIN, 50));
        labelNombre.setBounds(0, 10, WIDTH, 60);
        setNombre("Nina");
        panel.add(labelNombre);
        // Mensaje
        labelMensaje.setFont(new Font(labelMensaje.getFont().getName(), Font.PLAIN, 20));
        labelMensaje.setBounds(0, 60, WIDTH, 60);
        panel.add(labelMensaje);
        // Imagen
        labelImagen.setBounds(0, 0, WIDTH, HEIGHT);
        labelImagen.setIcon(new ImageIcon(getClass().getResource("images/idle-0.png")));
        panel.add(labelImagen);

        // Botones
        // Alimentar
        botonAlimentar.setBounds(80, 620, 110, 30);
        botonAlimentar.setFocusPainted(false);
        botonAlimentar.addActionListener(e -> estado.alimentar());
        panel.add(botonAlimentar);
        // Jugar
        botonJugar.setBounds(215, 620, 110, 30);
        botonJugar.setFocusPainted(false);
        botonJugar.addActionListener(e -> estado.jugar());
        panel.add(botonJugar);
        // Dormir
        botonDormir.setBounds(350, 620, 110, 30);
        botonDormir.setFocusPainted(false);
        botonDormir.addActionListener(e -> estado.dormir());
        panel.add(botonDormir);
        // Estado
        botonEstado.setBounds(215, 670, 110, 30);
        botonEstado.setFocusPainted(false);
        botonEstado.addActionListener(e -> estado.estado());
        panel.add(botonEstado);

        // Animaciones
        Runnable acciones = () -> {
            try {
                while (true) {
                    cambiarImagen.acquire();
                    animarIdle();
                    cambiarImagen.release();
                    Thread.sleep(500);
                }
            } catch (Exception e) {
            }
        };
        movimientoNormal = new Thread(acciones);
        movimientoNormal.start();

        // Iniciar frame
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setMinimumSize(new Dimension(WIDTH, HEIGHT));
        frame.setResizable(false);
        frame.setVisible(true);
        frame.add(panel, BorderLayout.CENTER);
    }

    public void desactivarBotones() {
        botonAlimentar.setEnabled(false);
        botonJugar.setEnabled(false);
        botonDormir.setEnabled(false);
        botonEstado.setEnabled(false);
    }

    public void activarBotones() {
        botonAlimentar.setEnabled(true);
        botonJugar.setEnabled(true);
        botonDormir.setEnabled(true);
        botonEstado.setEnabled(true);
    }

    public void animarIdle() {
        labelImagen.setIcon(new ImageIcon(getClass().getResource("images/idle-" + idle + ".png")));
        idle = (idle == 1) ? 0 : 1;
    }

    public void animarDormir() {
        try {
            cambiarImagen.acquire();
            desactivarBotones();
            for (int contador = 0; contador < 8; contador++) {
                labelImagen.setIcon(new ImageIcon(getClass().getResource("images/sleep-" + sleep + ".png")));
                sleep = (sleep == 1) ? 0 : 1;
                Thread.sleep(500);
            }
            activarBotones();
            cambiarImagen.release();
        } catch (Exception e) {
        }
    }

    public void animarJugar() {
        try {
            cambiarImagen.acquire();
            desactivarBotones();
            for (int contador = 0; contador < 6; contador++) {
                labelImagen.setIcon(new ImageIcon(getClass().getResource("images/play-" + play + ".png")));
                play = (play == 1) ? 0 : 1;
                Thread.sleep(250);
            }
            activarBotones();
            cambiarImagen.release();
        } catch (Exception e) {
        }
    }

    public void animarComer() {
        try {
            cambiarImagen.acquire();
            desactivarBotones();
            for (int contador = 0; contador < 6; contador++) {
                labelImagen.setIcon(new ImageIcon(getClass().getResource("images/eat-" + eat + ".png")));
                eat = (eat == 1) ? 0 : 1;
                Thread.sleep(300);
            }
            activarBotones();
            cambiarImagen.release();
        } catch (Exception e) {
        }
    }

    public void setEstado(Estado nuevoEstado) {
        estado = nuevoEstado;
    }

    public void setNombre(String nuevoNombre) {
        labelNombre.setText(nuevoNombre);
    }

    public void setMensaje(String nuevoMensaje) {
        labelMensaje.setText(nuevoMensaje);
    }

    public JLabel getLabelImagen() {
        return labelImagen;
    }

    public static void main(String[] args) {
        new Mascota();
    }

}
