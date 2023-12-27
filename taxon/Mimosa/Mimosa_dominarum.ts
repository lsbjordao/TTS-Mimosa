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
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa dominarum
const Mimosa_dominarum = new Mimosa()
Mimosa_dominarum.specificEpithet = 'dominarum'

Mimosa_dominarum.stems = new Stems()

Mimosa_dominarum.stipule = new Stipule()
Mimosa_dominarum.stipule.margin = new MarginStipule()
Mimosa_dominarum.stipule.adaxial = new AdaxialStipule()
Mimosa_dominarum.stipule.abaxial = new AbaxialStipule()

Mimosa_dominarum.leaf = new Leaf()
Mimosa_dominarum.leaf.petiole = new Petiole()
Mimosa_dominarum.leaf.bipinnate = new Bipinnate()
Mimosa_dominarum.leaf.bipinnate.rachis = new Rachis()
Mimosa_dominarum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_dominarum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_dominarum.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(10)
Mimosa_dominarum.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(18, 26)
Mimosa_dominarum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_dominarum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_dominarum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_dominarum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(17, 30)
Mimosa_dominarum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_dominarum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_dominarum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_dominarum.inflorescence = new Inflorescence()
Mimosa_dominarum.inflorescence.peduncle = new Peduncle()
Mimosa_dominarum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_dominarum.flower = new Flower()
Mimosa_dominarum.flower.bracteole = new Bracteole()
Mimosa_dominarum.flower.merism = '4-merous'
Mimosa_dominarum.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_dominarum.flower.calyx = new Calyx()
Mimosa_dominarum.flower.corolla = new Corolla()
Mimosa_dominarum.flower.corolla.shape = 'funnelform'

Mimosa_dominarum.androecium = new Androecium()
Mimosa_dominarum.androecium.filaments = new Filaments()
Mimosa_dominarum.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_dominarum.ginoecium = new Ginoecium()
Mimosa_dominarum.ginoecium.ovary = new Ovary()

Mimosa_dominarum.fruit = new Fruit()
Mimosa_dominarum.fruit.stipe = new Stipe()
Mimosa_dominarum.fruit.replum = new Replum()
Mimosa_dominarum.fruit.epicarp = new Epicarp()

Mimosa_dominarum.seed = new Seed()


// Description authorship
Mimosa_dominarum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_dominarum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa dominarum
export { Mimosa_dominarum }