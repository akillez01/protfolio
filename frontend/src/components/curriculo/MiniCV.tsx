import Image from "next/image";

export default function MiniCV() {
  return (
    <div className="flex-1 flex flex-col-reverse gap-6 md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border border-zinc-800 rounded-2xl px-6 pt-6">
      <div className="relative min-w-72 h-64 xl:self-end">
        <Image src="/minha-foto.png" alt="Foto de perfil" fill priority />
      </div>
      <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
        <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
          <span
            className="
              bg-gradient-to-r from-red-500 via-white to-white
              text-transparent bg-clip-text text-2xl font-bold
            "
          >
            Achilles Oliveira
          </span>
          <span>Consultoria e Projetos</span>
        </div>
        <p className="text-sm text-center md:text-left lg:text-center xl:text-left">
          <strong>Suporte Técnico:</strong> Diagnóstico e resolução de problemas em computadores, impressoras e redes.<br />
          <strong>Infraestrutura:</strong> Configuração e manutenção de servidores e sistemas operacionais.<br />
          <strong>Automação:</strong> Utilização de ferramentas para automatizar tarefas e otimizar processos.<br />
          <strong>Desenvolvimento:</strong> Criação de aplicações e integração de sistemas.<br />
          <br />
          💡 <strong>Busco oportunidades para:</strong><br />
          - Aprimorar meus conhecimentos em DevOps e Desenvolvimento Backend.<br />
          - Contribuir para projetos voltados para automação e desenvolvimento de software.<br />
          - Aplicar meus conhecimentos em um ambiente colaborativo e inovador.<br />
          <br />
          🛠️ <strong>Minhas habilidades incluem:</strong><br />
          <strong>Tecnologias:</strong> Windows, Linux, Python, JavaScript, Docker, AWS, Google Cloud.<br />
          <strong>Ferramentas:</strong> ServiceNow, GitHub, Terraform.<br />
          <br />
          📈 <strong>Características profissionais:</strong><br />
          - <strong>Proativo:</strong> Sempre buscando soluções inovadoras e aprendizado contínuo.<br />
          - <strong>Adaptável:</strong> Facilidade em aprender novas tecnologias e ferramentas.<br />
          - <strong>Colaborativo:</strong> Trabalho bem em equipe e gosto de compartilhar conhecimento.<br />
        </p>
      </div>
    </div>
  );
}