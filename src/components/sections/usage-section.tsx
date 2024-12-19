import SDKIntegrationCard from "../cards/sdk-integration-card";

const UsageSection = () => {
  return (
    <section
      className="w-full py-70 pb-30 px-10 lg:px-0 min-h-screen flex-center bg-bg-2"
      id="usage"
    >
      <div className="w-full flex-center flex-col text-center gap-50 sm:gap-16 lg:gap-20 2xl:gap-80 px-4 sm:px-6 lg:px-8">
        <div className="flex-center flex-col text-center gap-12 sm:gap-8 lg:gap-10 2xl:gap-18">
          <h2 className="font-bold text-40 sm:text-30 lg:text-40 2xl:text-70 leading-tight">
            Simple <span className="text-gradient">API Integration</span>
          </h2>
          <p className="text-white/60 font-normal text-18 sm:text-16 lg:text-18 2xl:text-24 leading-normal max-w-xl sm:max-w-2xl lg:max-w-3xl 2xl:max-w-4xl mx-auto">
            Integrate secure authentication into your applications with just a
            few lines of code
          </p>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-16 2xl:gap-35 px-4 sm:px-6 lg:px-8 2xl:px-50">
          {apiSteps.map((step, index) => (
            <SDKIntegrationCard
              key={index}
              index={index}
              title={step.title}
              code={step.code}
              className="w-full h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageSection;

const apiSteps = [
  {
    title: "Install SDK",
    code: `npm install authwave-sdk\n`,
  },
  {
    title: "Initialize Project",
    code: `import { AuthService } from 'authwave-sdk';\n\nconst authService = new AuthService({\n  projectId: 'your-project-id',\n  projectKey: 'your-project-key'\n});`,
  },
  {
    title: "Implement Authentication",
    code: `try {
        const response = await authService.createAccount(
            "john doe", 
            "johndoe@gmail.com", 
            "Test123456@"
        );
        console.log("Account created successfully:", response);
    } catch (error) {
        console.error("Error creating account:", error);
    }`,
  },
];
