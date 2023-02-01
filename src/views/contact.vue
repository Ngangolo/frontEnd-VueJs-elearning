<template>
   <div>
         <tete></tete><br>
     <div class="content-area row col-5 jumbotron " >
             <main id="main" class="site-main" role="main">                        
                  <article >
                        <h2>Nous contacter</h2>
                     <div class="entry-content">
                          <p>Vous pouvez nous contacter en nous laissant un message ci-dessous :</p>
                            <div  lang="fr-FR">
                               <form action="" method="post" novalidate="novalidate">
                                    <p>
                                      <label> Votre nom <span class="text-danger">*</span><br>
                                        <span>
                                              <input type="text" name="your-name" value="" size="40">
                                        </span> 
                                      </label>
                                    </p>
                                    <p>
                                       <label> Votre e-mail <span class="text-danger">*</span><br>
                                          <span class=" your-email">
                                                <input type="email" name="your-email" value="" size="40">
                                          </span>
                                       </label>
                                    </p>
                                    <p>
                                       <label> Sujet<br>
                                         <span class=" your-subject">
                                               <input type="text" name="your-subject" value="" size="40">
                                          </span> 
                                       </label>
                                    </p>
                                    <p>
                                      <label> Votre message <span class="text-danger">*</span><br>
                                         <span class="your-message">
                                               <textarea name="your-message" cols="50" rows="5"></textarea>
                                          </span>
                                      </label>
                                    </p>
                                    <p>
                                      <input class="boutt" type="submit" value="Envoyer">
                                    </p><br>
                                </form>
                              </div>		
                        </div>
                  
                  </article>         
          </main>
      	</div>
          <pied></pied>
   </div>
</template>

<script>
import tete from '@/components/header.vue'
import pied from '@/components/footer.vue'

export default {
    name: 'Contact',
    components: {
    tete,
    pied,
 
  },
    
}
</script>

<style>
     .content-area {
             justify-content: center;
             top: 15px;
             margin-right: auto !important;
             margin-left: auto !important;
             border: solid gray 1px;
             margin-top:70px;
             margin-bottom: 50px;

     }
   .boutt{
       width: 200px;
       background-color: rgb(71, 131, 221);
       color: white;
       border-radius: 4px;
       height: 40px;
       border: none;

   }

</style>


