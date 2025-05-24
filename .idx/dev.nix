{pkgs}: {
  channel = "stable-24.05";
  packages = [
    pkgs.nodejs_20
    pkgs.fnm
  ];
  idx.extensions = [
    
  
 "ardonplay.jetbrains-idea-product-icon-theme"
 "BeardedBear.beardedtheme"
 "GoogleCloudTools.firebase-dataconnect-vscode"
 "GraphQL.vscode-graphql-syntax"
 "LaurentTreguier.vscode-simple-icons"
 "Letgamer.sweet-vscode-icons"
 "ms-python.debugpy"
 "ms-python.python"
 "ms-toolsai.jupyter"
 "ms-toolsai.jupyter-keymap"
 "ms-toolsai.jupyter-renderers"
 "ms-toolsai.vscode-jupyter-cell-tags"
 "ms-toolsai.vscode-jupyter-slideshow"
 "o-dka.vsclassic-icon-theme"
 "vymarkov.firebase-explorer"
 "wilfriedago.vscode-symbols-icon-theme"];
  idx.previews = {
    previews = {
      web = {
        command = [
          "npm"
          "run"
          "dev"
          "--"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}