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


// Description of Mimosa arenosa
const Mimosa_arenosa = new Mimosa()
Mimosa_arenosa.specificEpithet = 'arenosa'

Mimosa_arenosa.stems = new Stems()

Mimosa_arenosa.stipule = new Stipule()
Mimosa_arenosa.stipule.margin = new MarginStipule()
Mimosa_arenosa.stipule.adaxial = new AdaxialStipule()
Mimosa_arenosa.stipule.abaxial = new AbaxialStipule()

Mimosa_arenosa.leaf = new Leaf()
Mimosa_arenosa.leaf.petiole = new Petiole()
Mimosa_arenosa.leaf.bipinnate = new Bipinnate()
Mimosa_arenosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_arenosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_arenosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_arenosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 10)
Mimosa_arenosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(12)
Mimosa_arenosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_arenosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_arenosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_arenosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_arenosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_arenosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_arenosa.inflorescence = new Inflorescence()
Mimosa_arenosa.inflorescence.peduncle = new Peduncle()
Mimosa_arenosa.inflorescence.spicate = new Spicate()

Mimosa_arenosa.flower = new Flower()
Mimosa_arenosa.flower.bracteole = new Bracteole()
Mimosa_arenosa.flower.merism = '4-merous'
Mimosa_arenosa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_arenosa.flower.calyx = new Calyx()
Mimosa_arenosa.flower.calyx.shape = 'campanulate'
Mimosa_arenosa.flower.corolla = new Corolla()
Mimosa_arenosa.flower.corolla.shape = 'turbinate'

Mimosa_arenosa.androecium = new Androecium()
Mimosa_arenosa.androecium.filaments = new Filaments()
Mimosa_arenosa.androecium.filaments.colour = 'whitenish'

Mimosa_arenosa.ginoecium = new Ginoecium()
Mimosa_arenosa.ginoecium.ovary = new Ovary()

Mimosa_arenosa.fruit = new Fruit()
Mimosa_arenosa.fruit.stipe = new Stipe()
Mimosa_arenosa.fruit.replum = new Replum()
Mimosa_arenosa.fruit.epicarp = new Epicarp()

Mimosa_arenosa.seed = new Seed()


// Description authorship
Mimosa_arenosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_arenosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa arenosa
export { Mimosa_arenosa }