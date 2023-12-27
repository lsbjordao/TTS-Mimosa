// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa glutinosa
const Mimosa_glutinosa = new Mimosa()
Mimosa_glutinosa.specificEpithet = 'glutinosa'

Mimosa_glutinosa.stems = new Stems()

Mimosa_glutinosa.stipule = new Stipule()
Mimosa_glutinosa.stipule.margin = new MarginStipule()
Mimosa_glutinosa.stipule.adaxial = new AdaxialStipule()
Mimosa_glutinosa.stipule.abaxial = new AbaxialStipule()

Mimosa_glutinosa.leaf = new Leaf()
Mimosa_glutinosa.leaf.petiole = new Petiole()
Mimosa_glutinosa.leaf.bipinnate = new Bipinnate()
Mimosa_glutinosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_glutinosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_glutinosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_glutinosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 15)
Mimosa_glutinosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_glutinosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_glutinosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_glutinosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(26, 36)
Mimosa_glutinosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_glutinosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_glutinosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_glutinosa.inflorescence = new Inflorescence()
Mimosa_glutinosa.inflorescence.peduncle = new Peduncle()
Mimosa_glutinosa.inflorescence.spicate = new Spicate()

Mimosa_glutinosa.flower = new Flower()
Mimosa_glutinosa.flower.bracteole = new Bracteole()
Mimosa_glutinosa.flower.merism = '4-merous'
Mimosa_glutinosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_glutinosa.flower.calyx = new Calyx()
Mimosa_glutinosa.flower.calyx.shape = 'campanulate'
Mimosa_glutinosa.flower.corolla = new Corolla()

Mimosa_glutinosa.androecium = new Androecium()
Mimosa_glutinosa.androecium.filaments = new Filaments()
Mimosa_glutinosa.androecium.filaments.colour = 'whitenish'

Mimosa_glutinosa.ginoecium = new Ginoecium()
Mimosa_glutinosa.ginoecium.ovary = new Ovary()

Mimosa_glutinosa.fruit = new Fruit()
Mimosa_glutinosa.fruit.stipe = new Stipe()
Mimosa_glutinosa.fruit.replum = new Replum()
Mimosa_glutinosa.fruit.epicarp = new Epicarp()

Mimosa_glutinosa.seed = new Seed()


// Description authorship
Mimosa_glutinosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_glutinosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa glutinosa
export { Mimosa_glutinosa }